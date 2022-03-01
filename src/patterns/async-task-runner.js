/*
get the file name from command prompt
run the file and after execution print success or failure
*/

function format(time) {
  return time.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
}

function run(task) {
  const start = new Date();
  console.info(
    `[${format(start)}] Starting '${task.name}'...`,
  );

  return task().then(resolution => {
    const end = new Date();
    const time = end.getTime() - start.getTime();
    console.info(
      `[${format(end)}] Finished '${task.name}' after ${time} ms`,
    );
    return resolution;
  })
}


if (require.main === module && process.argv.length > 2) {

  const module = require(`./${process.argv[2]}.js`);

  run(module)
    .then(() => console.info('module execution completed...'))
    .catch(err => {
      console.error(err.stack);
      process.exit(1);
    });
}


//node async-task-runner async-task