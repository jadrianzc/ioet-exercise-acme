# IOET EXERCISE ACME

This project uses Nodejs for the resolution of the exercise.

## 📜 Exercise description

The company ACME offers their employees the flexibility to work the hours they want. But due to some external circumstances they need to know what employees have been at the office within the same time frame.

The goal of this exercise is to output a table containing pairs of employees and how often they have coincided in the office.

Input: the name of an employee and the schedule they worked, indicating the time and hours. This should be a .txt file with at least five sets of data.

## 💻 Project execution

Once the repository is _cloned_, use the following command to install the necessary packages to perform the tests:

```
$ npm install
```

Once the installation is complete, you can test the application by running the `start` script, as follows:

```
$ npm start
```

### 🐛 Tests

To perform the tests you must execute the `test` script, as follows::

```
$ npm test
```

## 📝 Solution description

To solve this exercise, two programming paradigms were used: Structured Programming and Object Oriented Programming.

Where we have the _Store_ class that handles the input data of the project, that is, its reading and validation.

We have the _EmployeeUtils_ class to obtain the most readable and structured information to be able to obtain the expected result, where we obtain the schedules of each employee.

We have the _EmployeeWorkDays_ class that has a single method that returns the day and the entry and exit times converted to minutes, this in order to determine which employee starts the workday first and thus know if he meets another employee.

Finally there is the _Result_ class which has a method that outputs information in the correct format.

These classes are instantiated in the initial file of the project where the methods are executed sequentially in a self-executing function.

In addition, certain SOLID principles are implemented, specifically the Single Responsibility Principle.

## ✒️ Software architecture used

The architecture it implements is Modularization or Modular Decomposition, which consists of breaking down the problem to be solved into modules or simpler tasks. In this case, several classes were created with different methods in charge of an action.

![imgModularization](https://ittgweb.files.wordpress.com/2016/05/sg37_calidad_fig1.jpg)

## 🚩 Explanation of the approach

A sequential methodological approach or called _Waterfall Model_ was given to it, since it was divided into phases, where the requirements were established, then the algorithm was designed, the solution was implemented and finally the tests were carried out.

## 🚧 Methodology used

For this exercise, an agile methodology was used, specifically the _XP Methodology_ or _Extreme Programming_, as it had a short period for development and where the requirements phase was sent:

- It was planned to first finish the functionality of the program and then apply an architecture pattern.
- The inputs and outputs provided in the mail were taken as a basis.
- The necessary algorithm was developed to display the output data required by the exercise.
- Unit tests were applied with the Jest library.
- The tests were carried out by inserting various data in the file _exercise.txt_ and last validations passing to the final launch of the software.

## ✅ License

This project is licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
