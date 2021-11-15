const chalk = require('chalk');
const chalkAnimation = require('chalk-animation');
const log = console.log;

log('')
log(`    _________________________________________________________________________
  / \\                                                                        \\
 |   |                                                                       |
  \\_ |                    ${chalk.bold.cyan('A trip down memory lane')}                            |
     |                                                                       |
     |     ${chalk.green('An old man sits in a recliner, a bloodhound curled up by the ')}     |
     |     ${chalk.green('fireplace and a grandson sits upon his knee.  The grandson looks ')} |
     |     ${chalk.green('up, and with a hopeful tone in his voice, asks his grandfather, ')}  |
     |     ${chalk.yellow('"Grandpa, what was life like when you were young?"')}                |
     |                                                                       |     
     |     ${chalk.keyword('orange')('"Well..."')}${chalk.green(', He leans back in his chair, ')}${chalk.keyword('orange')('"Life was a lot different ')} |
     |     ${chalk.keyword('orange')('back then.  Everything moved at a slower pace, and we had ')}        |
     |     ${chalk.keyword('orange')('to do without a lot of the comforts we take for granted today."')}   |
     |                                                                       |
     |     ${chalk.green('The bloodhound stirs, reaches behind his ear with a hind leg, and')} |
     |     ${chalk.green('furiously scratches at a wound delivered by his nemesis, the')}      |
     |     ${chalk.green('mosquito.')}                                                         |
     |                                                                       |
     |     ${chalk.keyword('orange')('"There were good times and bad, just like today"')}${chalk.green(' He says with a ')}  |
     |     ${chalk.green('lopsided smile on his face, ')}${chalk.keyword('orange')('"but if there is one lesson')}           |
     |     ${chalk.keyword('orange')('I learned from my long and happy life, it is that we should try ')}  |
     |     ${chalk.keyword('orange')('to enjoy the little things we might otherwise take for granted.  ')} |
     |     ${chalk.keyword('orange')('Like a quiet evening in front of a fire with our loved ones,')}      |
     |     ${chalk.keyword('orange')('telling stories.')}                                                  |
     |                                                                       |
     |                                                                       |
     |                       ${chalk.bold.cyan('By Jeff Johnson')}                                 |
     |    ___________________________________________________________________|____
     |   /                                                                       /
      \\_/_______________________________________________________________________/
`)
chalkAnimation.rainbow('                        Thanks for reading!');
