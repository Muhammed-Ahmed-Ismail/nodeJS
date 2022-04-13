import  {readFileSync,writeFileSync,accessSync} from 'fs';
export class FileHandler
{
    readJsonFile(fileName)
    {
        let content='';
        try
        {
             content=readFileSync(fileName,'utf-8');
              return JSON.parse(content);

        } catch(err)
        {
            console.log(err);
            return null;
        }

    }

    writeJsonFile(filename,data)
    {
        writeFileSync(filename,data);
    }

}