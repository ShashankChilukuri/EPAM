const fs=require('fs')



    fs.readFile(p, 'utf-8', (err) => { 
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('File content:');
    });


function appe(p, s) {
    fs.appendFile(p, s, (err) => {
        if (err) {
            console.error('Error appending file:', err);
            return;
        }
        console.log('Data appended successfully!');
    });
}

// Example usage:
appe("Example.txt", "appended\n"); // Appends data to example.txt
read("Example.txt"); // Reads the updated content
