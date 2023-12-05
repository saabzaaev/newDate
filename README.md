# What is __new Date()__ in JavaScript
> ## In JavaScript , date and time are represented by the Date object. The Date object provides the date and time information and also provides various methods. A JavaScript date defines the EcmaScript epoch that represents milliseconds since 1 January 1970 UTC. This date and time is the same as the UNIX epoch (predominant base value for computer-recorded date and time values).

# ${\color{red}{creating\ new\ date()}}$
* ### new Date()
  ```JavaScript
  let date = new Date()
  console.log(date);
  // output: 2023-11-5T13:00:00.00Z
   ```
* ### new Date(milliseconds)
  ```JavaScript
  let date = new Date(0)
  console.log(date);
  // output: 1970-01-01T00:00:00.00Z
   ```
* ### new Date(Date string)
  ```JavaScript
  let date = new Date("2023-11-05")
  console.log(date);
  // output: 2023-11-055T13:00:00Z
   ```
* ### new Date(Year,Month,Day,hours,minutes,seconds,milliseconds)
  ```JavaScript
  let date = new Date(2023 , 11 , 05 , 13 , 00 , 00 , 00)
  console.log(date);
  // output: 2023-11-055T13:00:00Z
   ```
# ${\color{red}{new\ date()\ methods}}$
* ### getFullYear(): Returns the year.
* ### getMonth(): Returns the month (0-11).
* ### getDate(): Returns the day of the month
* ### getHours(): Returns the hour.
* ### getMinutes(): Returns the minute.
* ### getSeconds(): Returns the second.
* ### getMilliseconds(): Returns the millisecond.
* ### getTime(): Returns the number of milliseconds since the Unix epoch.
* ### setTime(): Sets the date and time.
* ### setFullYear(): Sets the year.
* ### setMonth(): Sets the month.
* ### setDate(): Sets the day of the month.
* ### setHours(): Sets the hour.
* ### setMinutes(): Sets the minutes.
* ### setSeconds(): Sets the seconds.
* ### setMilliseconds(): Sets the milliseconds.

  
  
