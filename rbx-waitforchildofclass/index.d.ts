/**
 * Yields the current thread until a child with the given ClassName is found, then returns the child.
 * If the TimeOut parameter is specified, this function will time out and return nil if TimeOut seconds elapse without the child being found.
 * If a call to this function exceeds 5 seconds without returning, and the TimeOut parameter isn't specified, then a warning will be printed to the output stating that it may never terminate with a stack-trace to the line that called it.
 * WaitForChildOfClass will act either as a regular Function or a Yield Function based on whether the child exists at the moment of calling or not. If the child exists when the function is called, then WaitForChildOfClass will not yield. Otherwise it will.
 * When working on LocalScripts, it is recommended to always use WaitForChildOfClass to access children (instead of other access functions such as the dot operator or FindFirstChild) so that the script is resilient to any loading issues.
 * If there are circumstances where it is known for certain that the instance has already replicated to the client, then the code can be optimized to use the dot operator instead of WaitForChildOfClass.
 *
 * @param parent The parent instance to search within.
 * @param className The name of the class to yield for.
 * @param timeOut the maximum number of seconds to hang the current thread. If unspecified, a warning will be printed after 5 seconds of hanging.
 */
declare function WaitForChildOfClass<T extends keyof Instances>(
  parent: Instance,
  className: T,
  timeOut?: number
): Instances[T];

/**
 * Yields the current thread until a child with the given ClassName is found, then returns the child.
 * If the TimeOut parameter is specified, this function will time out and return nil if TimeOut seconds elapse without the child being found.
 * If a call to this function exceeds 5 seconds without returning, and the TimeOut parameter isn't specified, then a warning will be printed to the output stating that it may never terminate with a stack-trace to the line that called it.
 * WaitForChildOfClass will act either as a regular Function or a Yield Function based on whether the child exists at the moment of calling or not. If the child exists when the function is called, then WaitForChildOfClass will not yield. Otherwise it will.
 * When working on LocalScripts, it is recommended to always use WaitForChildOfClass to access children (instead of other access functions such as the dot operator or FindFirstChild) so that the script is resilient to any loading issues.
 * If there are circumstances where it is known for certain that the instance has already replicated to the client, then the code can be optimized to use the dot operator instead of WaitForChildOfClass.
 *
 * @param parent The parent instance to search within.
 * @param className The name of the class to yield for.
 * @param timeOut the maximum number of seconds to hang the current thread. If unspecified, a warning will be printed after 5 seconds of hanging.
 */
declare function WaitForChildOfClass(
  parent: Instance,
  className: string,
  timeOut?: number
): Instance;

export = WaitForChildOfClass;
