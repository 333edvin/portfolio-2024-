export default function SingleLoadingSkeleton(){
    return(
        <div className=" py-10 pt-32 md:px-10 lg:px-20 relative overflow-hidden">
        <div className="container mx-auto  relative space-y-20 md:space-y-10">
          <div className='space-y-3'>
          <div className="h-5 w-52 bg-slate-200 loading"></div>
          <div className="h-5 w-52 bg-slate-200 loading"></div>
          </div>
          <hr/>
         
        </div>
        <div className="h-96 w-full bg-slate-200 loading"></div>
  

  
          <div className="container mx-auto px-6 space-y-20">
            <div className="grid grid-cols-1 md:grid-cols-2 mx-auto my-10 gap-10">
              <div className="flex justify-around">
                  <div className="h-72 w-56 bg-slate-200 loading"></div>
                    <div className="h-72 w-56 bg-slate-200 loading"></div>
              </div>
            <div className='flex flex-col space-y-2 '>
            <div className="h-5 w-full bg-slate-200 loading"></div>
            <div className="h-5 w-full bg-slate-200 loading"></div>
            <div className="h-5 w-full bg-slate-200 loading"></div>
            <div className="h-5 w-full bg-slate-200 loading"></div>
            <div className="h-5 w-full bg-slate-200 loading"></div>
            <div className="h-5 w-full bg-slate-200 loading"></div>
            <div className="h-5 w-full bg-slate-200 loading"></div>
            <div className="h-5 w-full bg-slate-200 loading"></div>
            </div>
            </div>
          </div>

<div className="flex justify-around">
          <div className="w-[30rem] h-[50rem] bg-slate-200 loading"></div>
          <div className="w-[30rem] h-[50rem] bg-slate-200 loading"></div>
</div>
  
  
      </div>
    )
}