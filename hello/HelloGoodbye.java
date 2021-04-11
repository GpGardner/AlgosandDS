import java.util.ArrayList;

public class HelloGoodbye {
  public static void main(String[] args) {
    // String answer = formatNames(args);

    System.out.println("Hello " + formatNames(args));
    System.out.println("Goodbye " + otherWay(args));

  }

  public static String formatNames(String[] args) {

    String answer = String.format("%s and %s", args[0], args[1]);

    return answer;
  }

  public static String otherWay(String[] args) {

    String answer = String.format("%s and %s", args[1], args[0]);

    return answer;
  }
}
