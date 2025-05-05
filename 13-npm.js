import _ from 'lodash';
import chalk from'chalk';

const message = _.capitalize('hello world');
const list = [1,[2,[3,[4,[5]]]]]


console.log(chalk.green(message));
console.log(chalk.blue(message));

console.log(chalk.yellow(_.flatMapDeep(list)));
