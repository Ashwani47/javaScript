java Script is a:-
1.
 Synchronus lang by default
(Synchronus lang:- ek code execute hoga uske baad ek code execute hoga uske baad ek)
but can be asynchronus if user wants (e.g.- setTimeout, setInterval)

2.
single Threaded lang
(therefore slow execution in comparison to others but we can't feel it)

the above both are default javascript behaviour

->Execution context
            |-> execute one line of code at a time
          T |
          H |->console log->1
          R |                         // each operations waits for the last one 
          E |->console log->2         // to complete before executing   
          A |
          D |         ______________   _______________
            |         | CALL STACK |   | MEMORY HEAP |
            V         |____________|   |_____________|


    Blocking Code               Vs             Non Blocking code
         |                                            |
         V                                            V
 Block the flow of Execution                Does not Block Execution
(e.g.-mehmaan aaye baitha diye or          (e.g.- mehmaan aaye baitha diye or
 kuch bhi karne se man kar diye)             bole ki phone vone chalao hum kuvh lekar aate hai)
        |                                             |
        V                                             V
Read file Sync                                Read file Async  




+--------------------------------------------------+
|                   JS Engine         +------------|------------------------------------+
|                                     |            |                                    |        
|  +-------------+      +-------------V----------+ |                                    |
|  | Memory Heap |      |       CALL STACK       | |<-----------+                       |
|  |             |      | +--------------------+ | |            |                       |
|  |             |      | |        fn          | | |            |                       |       
|  |             |      | +--------------------+ | |            |                       |
|  |             |      | |        fn          | | |            |                       |
|  |             |      | +--------------------+ | |            |                       |       
|  |             |      | |        fn          | | |            |                       |
|  |             |      | +--------------------+ | |            |                       |
|  |             |      | |      Global        | | |            |                       |       
|  +-------------+      +------------------------+ |            ^                       ^
+---------------------------------------------------+           |                       |
                                | call                          |                       |
                                v                               |                       |        
+---------------------------------------------------+           |                       |
|                     Web API                       |           |                       |
|  +----------------------------------------------+ |           |                       |
|  | DOM API     Set timeout   Set interval       | |           ^                       |        
|  |                                              | |           |                       |
|  | fetch()                    Register Callback | |           |                       |
|  +----------------------------------------------+ |           |                       |
|            |                           |          |           |                       |        
|            v                           |          |           |                       |
|      +-----------+                     |          |           |                       ^
|      |   CB  CB  |  (Callback ready)---|----------|------>----+                       |               
|      +-----------+                     |          |                                   |
+----------------------------------------|----------+                                   |       
                                         |                                              |       
                                         v                                              |
+---------------------------------------------------+                                   |
|                   Task Queue                      |                                   |     
|      +-----------+  +-----------+                 |                                   |
|      |    CB     |  |    CB     |-----------------|--------------------->-------------|
|      +-----------+  +-----------+                 |
+---------------------------------------------------+
         ^
         |
     Event Loop




                                         
                                          response = fetch("something")
                              /-------------|                   |
                             /                                   \           
                            /                                     \         
                           /                                       \                                                                                                                             |
                          v                                          \                         
   +--------------------------+                                       \                                                       
   |   Data                   |                                         \                    
   |   onFulfilled[]          |                                           \                
   |   onRejection[]          |                                             \                                                      
   +--------------------------+                                               \
            |                                                                   \  
            v                                                                     \    
   +--------------------------+                                                     \
   | Global Memory            |                                                       \   
   | response:                |                                                         \              
   +--------------------------+                                                           \------------------|                                        v
                                                                                                      +------V----------------+
                                                                                                      |   Web Browser / Node  |
                                                                                                      +-----------------------+
                                                                                                                  |
                                                                                                                  v
                                                                                                          +--------------+
                                                                                                          | Network Req. |
                                                                                                          +--------------+
                                                                                                            /         \
                                                                                                            v           v
                                                                                                        [Success]   [Failure]
                                                                                                          ✔            ✖           