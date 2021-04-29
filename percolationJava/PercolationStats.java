/* *****************************************************************************
 *  Name:    Ada Lovelace
 *  NetID:   alovelace
 *  Precept: P00
 *
 *  Description:  Prints 'Hello, World' to the terminal window.
 *                By tradition, this is everyone's first program.
 *                Prof. Brian Kernighan initiated this tradition in 1974.
 *
 **************************************************************************** */

import edu.princeton.cs.algs4.StdRandom;
import edu.princeton.cs.algs4.StdStats;


public class PercolationStats {

  public static final double CONFIDENCE = 1.96;
  private double mean;
  private double stddev;
  private double confidenceLo;
  private double confidenceHi;

  // perform independent trials on an n-by-n grid
  public PercolationStats(int n, int trials) {
    if (n <= 0 || trials <= 0) {
      throw new IllegalArgumentException();
    }

    // Create a counts array to pass to mean
    double[] counts = new double[trials];

    // Make a loop to create a percolation instance
    for (int i = 0; i < trials; i++) {
      Percolation p = new Percolation(n);
      double counter = 0.0;

      // count till it percolates
      while (!p.percolates()) {

        int rand1 = StdRandom.uniform(0, n);
        int rand2 = StdRandom.uniform(0, n);
        if (!p.isOpen(rand1, rand2)) {
          counter++;
          p.open(rand1, rand2);
        }
      }

      double avg = counter / (n * n);
      counts[i] = avg;

    }
    // Keep track of how many it takes to percolate
    mean = StdStats.mean(counts);
    stddev = StdStats.stddev(counts);
    confidenceLo = mean - (CONFIDENCE * stddev / Math.sqrt(trials));
    confidenceHi = mean + (CONFIDENCE * stddev / Math.sqrt(trials));
  }

  // sample mean of percolation threshold
  public double mean() {
    return mean;
  }


  // sample standard deviation of percolation threshold
  public double stddev() {
    return stddev;
  }

  // low endpoint of 95% confidence interval
  public double confidenceLo() {
    return confidenceLo;
  }

  // high endpoint of 95% confidence interval
  public double confidenceHi() {
    return confidenceHi;
  }

  // test client (see below)
  public static void main(String[] args) {

    int grid = Integer.parseInt(args[0]);
    int trials = Integer.parseInt(args[1]);

    PercolationStats percolationStats = new PercolationStats(grid, trials);
    System.out.println(percolationStats.mean());
    System.out.println(percolationStats.stddev());
    System.out.println(percolationStats.confidenceLo());
    System.out.println(percolationStats.confidenceHi());


  }

}
