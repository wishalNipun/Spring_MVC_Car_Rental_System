package lk.ijse.spring.util;

import java.time.LocalDate;
import java.util.ArrayList;

public class CountDays {


        public static ArrayList<LocalDate> getDates(LocalDate start, LocalDate end) {
            ArrayList<LocalDate> dates = new ArrayList<>();
            while (!start.isAfter(end)) {
                dates.add(start);
                start = start.plusDays(1);
            }
            return dates;
        }

}
