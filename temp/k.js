//This file is a beta of a key logging system, we will not complete it since it is an opensource
//but we will not delete it so that you can finish it if you need it, you can run it as is without any problem.
    function cllent(key) {
        if (key != 'HZ11-CCC5-ZZZ1-OAZA-1101') {
            console.log(colors.red('-------------------------------------------'))
            console.error(colors.yellow('ERROR: ')+colors.underline('Key in config.json is invalid!!!.'));
            console.log(colors.red('-------------------------------------------'))
            return process.exit(0);
        } else{
            console.log(colors.underline(colors.green('Success: Key of service is VALID!.')))
            return 0;
        }
    }

    

