# Cookie Clicker Task

Your task is to:

1. Fork this repository

2. Amend the tests (and application code) in a way that every rerun of the tests
will reproduce same results without restarting the application.

## Tests setup

1. Install latest Node (at least Node v16)

2. Install packages with `yarn install`

## Running tests

On Linux

`PAGE_URL="YOUR_APPLICATION_URL_GOES_HERE" yarn test`

On Windows cmd (Command Prompt)

```cmd
setx PAGE_URL "YOUR_APPLICATION_URL_GOES_HERE"
yarn test
```

## Submission

Send a link to your public repository via e-mail.

## Evaluation

Your submission will be evaluated in the following categories:

- Adherence to the specs laid out in tests

- Quality of the code: [Clean code rules](https://gist.github.com/wojteklu/73c6914cc446146b8b533c0988cf8d29)

- Git practices and commit message quality: [How to write a good commit message](https://www.gitkraken.com/learn/git/best-practices/git-commit-message)

## Other notes

You are free to use whatever language/framework/technologies you want.

Along with code submit instructions how to start the application.

No backend is necessary, it is fine to hold the count as long as the application is
running.

Any extra functionality in the solution, which is not laid out in the spec should also
be tested

Example solution for this test task can be found at: [Cookie Clicker test task example](https://github.com/Foundation-CR14/Cookie-Clicker-test-task-example)
