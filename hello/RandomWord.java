/* *****************************************************************************
 *  Name:              George Gardner
 *  Coursera User ID:  123456
 *  Last modified:     4/22/21
 **************************************************************************** */


import edu.princeton.cs.algs4.StdIn;
import edu.princeton.cs.algs4.StdRandom;

public class RandomWord {
    public static void main(String[] args) {
        while (!StdIn.isEmpty()){
            double count = 1;
            String word = StdIn.readString();

            String champion = StdRandom.bernoulli(count) ?  word : null;
            count++;
        }


    }
}
