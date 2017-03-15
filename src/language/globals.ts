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

export var stringFunctions: IEntries = {
  ucase:{
    description:"Converts the string to all upper case.",
    signature: "UCase(s as String) as String"
  },
  lcase:{
    description: "Converts the string to all lower case.",
    signature: "LCase(s as String) as String"
  },
  asc:{
    description: "Returns the Unicode ('ASCII') value for the first character of the specified string.",
    signature: "Asc(letter as String) as Integer"
  },
  chr: {
    description: "Performs the inverse of the Asc function: returns a one-character string whose character has the specified Unicode value.",
    signature:"Chr(ch as Integer) as String"
  },
  instr:{
    description: "Returns the position of the first instances of substring within text, starting at the specified start position.",
    signature: "Instr(start as Integer, text as String, substring as String) as Integer"
  },
  left:{
    description: "Returns the first n characters of s.",
    signature: "Left(s as String, n as Integer) as String"
  },
  len:{
    description: "Returns the number of characters in the specified string.",
    signature: "Len(s as String) as Integer"
  },
  mid:{
    description: "Returns a substring of s with length n and starting at position p.",
    signature: "Mid(s as String, p as Integer, [n as Integer]) as String"
  },
  right:{
    description: "Returns the last n characters of s.",
    signature: "Right(s as String, n as Integer) as String"
  },
  str:{
    description: "Converts a value to a string. Str(A), for example, returns a string equal to the decimal representation of the numeric value of A.",
    signature: "Str(value as Float) as String"
  },
  stri:{
    description: "Converts a value to a string. Str(A), for example, returns a string equal to the decimal representation of the numeric value of A.",
    signature: "StrI(value as Float) as String"
  },
  string:{
    description: "Returns a string composed of n copies of the second argument concatenated together.",
    signature: "String(n as Integer, str as String ) as String"
  },
  stringi: {
    description: "Returns a string composed of n copies of the character whose Unicode value is the second argument.",
    signature: "StringI(n as Integer, ch as Integer) as String"
  },
  val:{
    description: "Performs the inverse of the STR function: returns the number represented by the characters in a string argument.",
    signature: "Val(s as String) as Float"
  },
  substitute: {
    description: "Replaces all instances of {0} or ^0 in str with arg0.  Similarly, replaces all instances of {1} or ^1 with arg1, {2} or ^2 with arg2, and {3} or ^3 with arg3.",
    signature: "Substitute(str as String, arg0 as String, arg1 = '' as String, arg2 = '' as String, arg3 = '' as String) as String"
  }
}

export var mathFunctions: IEntries = {
  abs:{
    signature: "Abs(x as Float) as Float",
    description: "Returns the absolute value of the argument."
  },
  atn:{
    signature: "Atn(x as Float) as Float",
    description: "Returns the arctangent (in radians) of the argument; that is, ATN(X) returns 'the angle whose tangent is X'. To get arctangent in degrees, multiply ATN(X) by 57.29578."
  },
  cdbl:{
    signature: "Cdbl(x as Integer) as Float",
    description: "Also returns a single precision float representation of the argument. Someday may return double."
  },
  cint:{
    signature: "Cint(x as Float) as Integer",
    description: "Returns an integer representation of the argument, rounding up from midpoints. CINT(2.1) returns 2; CINT(2.5) returns 3; CINT(-2.2) returns -2; CINT(-2.5) returns -2; CINT(-2.6) returns -3."
  },
  cos:{
    signature: "Cos(x as Float) as Float",
    description: "Returns the cosine of the argument (argument must be in radians). To obtain the cosine of X when X is in degrees, use CGS(X*.01745329)."
  },
  csng: {
    signature: "Csng(x as Integer) as Float",
    description: "Returns a single-precision float representation of the argument."
  },
  exp: {
    signature: "Exp(x as Float) as Float",
    description: "Returns the 'natural exponential' of X, that is, ex. This is the inverse of the LOG function, so X=EXP(LOG(X))."
  },
  fix:{
    signature: "Fix(x as Float) as Integer",
    description: "Returns a truncated representation of the argument. All digits to the right of the decimal point are simply chopped off, so the resultant value is an integer. For non-negative X, FIX(X)=lNT(X). For negative values of X, FIX(X)=INT(X)+1. For example, FIX(2.2) returns 2, and FIX(-2.2) returns -2."
  },
  int:{
    signature: "Int(x as Float) as Integer",
    description: "Returns an integer representation of the argument, using the largest whole number that is not greater than the argument.. INT(2.5) returns 2; INT(-2.5) returns -3; and INT(1000101.23) returns 10000101."
  },
  log: {
    signature: "Log(x as Float) as Float",
    description: "Returns the natural logarithm of the argument, that is, loge(x) or ln(x). This is the inverse of the EXP function, so LOG(EXP(X)) = X. To find the logarithm of a number to another base b, use the formula logb(X) = loge(X) / loge(b). For example, LOG(32767) / LOG(2) returns the logarithm to base 2 of 32767."
  },
  rnd:{
    signature: "Rnd(range as Integer) as Integer",
    description: "Generates a pseudo-random number using the current pseudo-random 'seed number' (generated internally and not accessible to user). RND may be used to produce random numbers between 0 and 1, or random integers greater than 0, depending on the argument."
  },
  sgn:{
    signature: "Sgn(x as Float) as Integer",
    description: "The 'sign' function: returns -1 for X negative, 0 for X zero, and +1 for X positive."
  },
  sin: {
    signature: "Sin(x as Float) as Float",
    description: "Returns the sine of the argument (argument must be in radians). To obtain the sine of X when X is in degrees, use SIN(X*.01745329)."
  },
  sqr: {
    signature: "Sqr(x as Float) as Float",
    description: "Returns the square root of the argument. SQR(X) is the same as X ^ (1/2), only faster."
  },
  tan: {
    signature: "Tan(x as Float) as Float",
    description: "Returns the tangent of the argument (argument must be in radians). To obtain the tangent of X when X is in degrees, use TAN(X*.01745329)."
  }
}