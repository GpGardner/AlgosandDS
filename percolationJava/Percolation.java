/* *****************************************************************************
 *  Name:    George Gardner
 *  NetID:   Nope
 *  Precept: P00
 *
 *  Description:  Percolation class, for percolating
 *
 **************************************************************************** */

import edu.princeton.cs.algs4.In;
import edu.princeton.cs.algs4.WeightedQuickUnionUF;

public class Percolation {
  private final int top = 0;
  private final int bottom;
  private final boolean[][] opened;
  private final int size;
  private int openSites;
  private final WeightedQuickUnionUF uf;


  // creates n-by-n grid, with all sites initially blocked
  public Percolation(int n) {
    if (n <= 0) {
      throw new IllegalArgumentException();
    }
    size = n;
    bottom = size * size + 1;
    uf = new WeightedQuickUnionUF((size * size + 2));
    opened = new boolean[size][size];
    openSites = 0;

  }

  // opens the site (row, col) if it is not open already
  public void open(int row, int col) {
    checkException(row, col);
    int thisNode = getQuickFindIndex(row, col);

    opened[row][col] = true;
    ++openSites;

    // check top
    if (row == 0) {
      System.out.println("top check - " + thisNode + " " + top);
      uf.union(thisNode, top);
    }

    // check bottom
    if (row == size - 1) {
      System.out.println("bottom check - " + thisNode + " " + bottom);
      uf.union(thisNode, bottom);
    }

    // check above
    if (row > 0 && isOpen(row - 1, col)) {
      uf.union(thisNode, getQuickFindIndex(row - 1, col));
    }

    // check below
    if (row < size - 1 && isOpen(row + 1, col)) {
      uf.union(thisNode, getQuickFindIndex(row + 1, col));
    }

    // check left
    if (col > 0 && isOpen(row, col - 1)) {
      uf.union(thisNode, getQuickFindIndex(row, col - 1));
    }

    // check right
    if (col < size - 1 && isOpen(row, col + 1)) {
      uf.union(thisNode, getQuickFindIndex(row, col + 1));
    }


  }

  //  check to make sure row,col are inbounds
  private void checkException(int row, int col) {
    if (row < 0 || row > size || col < 0 || col > size) {
      throw new IllegalArgumentException();
    }
  }


  // is the site (row, col) open?
  public boolean isOpen(int row, int col) {
    if (opened[row][col]) {
      return true;
    }
    return false;
  }

  // is the site (row, col) full?
  public boolean isFull(int row, int col) {
    checkException(row, col);
    // System.out.println("Check full for: " + row + " " + col);
    return (uf.find(top) == uf.find(getQuickFindIndex(row, col)));

  }

  // returns the number of open sites
  public int numberOfOpenSites() {
    return openSites;
  }

  // does the system percolate?
  public boolean percolates() {
    // System.out.println(uf.find(top) + " " + uf.find(bottom) + " percolateS?");
    return (uf.find(top) == uf.find(bottom));

  }

  // find the index of the given row, col
  private int getQuickFindIndex(int row, int col) {
    return (size * row) + col + 1;
  }

  public void printGrid(int n) {
    for (int row = 0; row < n; row++) {
      for (int col = 0; col < n; col++) {
        System.out.printf("%d,%d\n ", row, col);
      }
    }
  }

  // test client (optional)
  public static void main(String[] args) {
    String filename = args[0];
    In in = new In(filename);
    int n = in.readInt();
    System.out.println(n);
    Percolation percolation = new Percolation(n);
    while (!in.isEmpty()) {
      int row = in.readInt();
      System.out.println(row);
      int col = in.readInt();
      System.out.println(col);
      percolation.open(row, col);
    }
    percolation.printGrid(n);
    System.out.println(percolation.percolates());
  }

}

