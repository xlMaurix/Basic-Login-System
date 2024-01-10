const fs = requiere('js')

const saveData = (database) =>{
    const finished = (error) => {
        if(error){
            console.error(error)
            return;
        }
        
    }

    const jsonData = JSON.stringify(database)
    fs.writefile('database.json',jsonData,finished)
}
