import input from 'input';

function clean(resp) {
    const yourResp = ['yes','yup','affirmative','definately','yeppers','yea','y',''];

    if (yourResp.includes(resp.toLowerCase())) {
        return true
    } else {
        return false
    }
}

async function main() {
    const resp = await input.text('Do you want to finish?');
    const isFinished = clean(resp);

    if (isFinished) {
        console.log('Done');
    } else {
        console.log('Not done');
    }
}

main();