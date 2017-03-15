import { EMSGSIZE } from 'constants';


export interface IEntry { description?:string, signature?:string }
export interface IEntries { [name: string]: IEntry }

export var globalFunctions: IEntries = {
  sleep:{
    description: "This function causes the script to pause for the specified time, without wasting CPU cycles. There are 1000 milliseconds in one second.",
    signature: "Sleep(milliseconds as Integer) as Void"
  },
  wait:{
    description: "This function waits on objects that are 'waitable' (those that have a MessagePort interface). Wait() returns the event object that was posted to the message port. If timeout is zero, 'wait' will wait for ever. Otherwise, Wait will return after timeout milliseconds if no messages are received. In this case, Wait returns a type 'invalid'.",
    signature: "Wait(timeout as Integer, port as Object) as Object"
  },
  getinterface:{
    description: "Each BrightScript Component has one or more interfaces. This function returns a value of type 'Interface'. Note that generally BrightScript Components allow you to skip the interface specification. In which case, the appropriate interface within the object is used. This works as long as the function names within the interfaces are unique.",
    signature: "GetInterface(object as Object, ifname as String) as Interface"
  },
  findmemberfunction: {
    description: "Returns the interface from the object that provides the specified function, or invalid if not found.",
    signature: "FindMemberFunction(object as Object, funName as String) As Interface"
  },
  uptime: {
    description: "Returns the uptime of the system since the last reboot in seconds.",
    signature: "UpTime(dummy as Integer) as Float"
  },
  rebootsystem: {
    description: "Requests the system to perform a soft reboot. The Roku platform has disabled this feature.",
    signature: "RebootSystem() as Void"
  },
  listdir:{
    description: "Returns a List object containing the contents of the directory path specified.",
    signature: "ListDir(path as String) as Object"
  }, 
  readasciifile:{
    description: "This function reads the specified file and returns the data as a string. The file can be encoded as either UTF-8 (which includes the 7-bit ASCII subset) or UTF-16. An empty string is returned if the file can not be read.",
    signature: "ReadAsciiFile(filepath as String) as String"
  },
  writeasciifile: {
    description: "This function writes the specified string data to a file at the specified location. The string data is written as UTF-8 encoded (which includes the 7-bit ASCII subset). The function returns true if the file was successfully written.",
    signature: "WriteAsciiFile(filepath as String, text as String) as Boolean"
  },
  copyfile:{
    description: "Make a copy of a file.",
    signature: "CopyFile(source as String, destination as String) as Boolean"
  },
  movefile: {
    description:"Rename a file.",
    signature: "MoveFile(source as String, destination as String) as Boolean"
  },
  matchfiles:{
    description: "Search a directory for filenames that match a certain pattern. Pattern is a wildmat expression. Returns a List object. This function checks all the files in the directory specified against the pattern specified and places any matches in the returned roList.",
    signature: "MatchFiles(path as String, pattern_in as String) as Object"
  },
  deletefile:{
    description: "Delete the specified file.",
    signature: "DeleteFile(file as String) as Boolean"
  },
  deletedirectory:{
    description: "Deletes the specified directory.  It is only possible to delete an empty director",
    signature: "DeleteDirectory(dir as String) as Boolean"
  },
  createdirectory:{
    description: "Creates the specified Directory. Only one directory can be created at a time",
    signature: "CreateDirectory(dir as String) as Boolean"
  }, 
  formatdrive: {
    description: "Formats a specified drive using the specified filesystem.",
    signature: "FormatDrive(drive as String , fs_type as String) as Boolean"
  },
  strtoi:{
    description: "Return the integer value of the string, or 0 if nothing is parsed.",
    signature: "StrToI(str as String) as Dynamic"
  },
  rungarbagecollector:{
    description: "This function runs the garbage collector. It returns and Associative Array with some statistics regarding the garbage collection. See the Garbage Collection section of this manual for more detail. You don't normally need to call this function. ",
    signature: "RunGarbageCollector() as Object"
  },
  parsejson: {
    description: "This function will parse a string formatted according to RFC4627 and return an equivalent BrightScript object (consisting of booleans, integer and floating point numbers, strings, roArray, and roAssociativeArray objects).  If the string is not syntactically correct, Invalid will be returned. ",
    signature: "ParseJson(jsonString as String) as Object"
  },
  formatjson: {
    description: "Formats a supported data type as a JSON string. Data types supported are booleans, integer and floating point numbers, strings, roArray, and roAssociativeArray objects.",
    signature: "FormatJson(json as Object, flags = 0 as Integer) as String"
  },
  tr:{
    description: "Translates the source string into the language of the current locale. The function looks for a translations.xml file in the XLIFF format in the pkg:/locale subdirectory named for the current locale (see ifDeviceInfo.GetCurrentLocale for the list of currently-supported locales). If the translations.xml file exists for the current locale, and contains the source string with a translated string, the function returns the translated string. Otherwise, the function returns the original source string.",
    signature: "Tr(source as String) as String"
  }
}

export var builtInFunctions: IEntries = {
  createobject:{
    description: "Creates a BrightScript Component of class classname specified. Return invalid if the object creation fails. Some Objects have optional parameters in their constructor that are passed after name.",
    signature: "CreateObject(classname as String, [optional parameters]) as Object"
  },
  type: {
    description: "Returns the type of a variable and/or object. See the BrightScript Component specification for a list of types.",
    signature: "Type(variable, [optional version]) as String"
  },
  getglobalaa:{
    description: "Each script has a global Associative Array. It can be fetched with this function. New in BrightScript 3.",
    signature: "GetGlobalAA() as Object"
  },
  box: {
    description: "Box() will return an object version of an intrinsic type, or pass through an object if given one.",
    signature: "Box(x as Dynamic) as Object"
  },
  run: {
    description: "The run command will run a script from a script. Args may be passed to the scripts Main() function, and the called script may return arguments. If a filename string is passed, that file compiled and run. ",
    signature: "Run(filename as String [ , Args…]) As dynamic"
  },
  eval:{
    description: "Eval can be used to run a code snippet in the context of the current function. It performs a compile, and then byte code execution.",
    signature: "Eval(code as String) as Dynamic"
  },
  getlastruncompileerror:{
    description: "Returns an roList of compile errors, or invalid if no errors. Each list entry is an roAssociativeArray with the keys: ERRNO, ERRSTR, FILESPEC, and LINENO.",
    signature: "GetLastRunCompileError() as Object"
  },
  getlastrunruntimeerror: {
    description: "Returns an error code result after the last script Run(). ",
    signature: "GetLastRunRuntimeError() as Integer"
  }
}