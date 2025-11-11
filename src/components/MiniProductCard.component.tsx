import { FiSearch } from "react-icons/fi";
import type { FormEvent } from "react";
import type { Product } from "../types/Product.type";
import { IoClose } from "react-icons/io5";


type MiniProductCardProps = {
     setIsOpen: (e: boolean) => void;
     panelRef: React.RefObject<HTMLDivElement | null>;
     query: string;
     setQuery: (q: string) => void;
     onSubmit: (e: FormEvent) => void;
     filtered: Product[];
}

const MiniProductCardComponent = ({ setIsOpen, panelRef, query, setQuery, onSubmit, filtered }: MiniProductCardProps) => {
     return (
          <>
               <div className="fixed inset-0 z-50 flex items-start justify-center md:pt-14" aria-modal="true" role="dialog">
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-[5px]" onClick={() => setIsOpen(false)}></div>
                    <div ref={panelRef} onClick={(e) => e.stopPropagation()} className="relative max-w-2xl w-full h-full md:h-auto md:mx-4 bg-white md:rounded-xl">
                         <div className="p-2 md:p-5">
                              <IoClose className="text-xl mb-3 md:hidden" onClick={() => setIsOpen(false)} />
                              <form onSubmit={onSubmit} className="flex items-center w-full py-2 bg-[#FAFAFA] border border-[#f6f6f6] rounded-lg overflow-hidden">
                                   <div className="relative hidden md:block">
                                        <select className="pl-4 pr-4 text-sm font-inter-regular bg-transparent text-neutral-700">
                                             <option>All Categories</option>
                                        </select>
                                   </div>
                                   <div className="w-px h-6 bg-neutral-300 mx-3"></div>
                                   <input value={query} onChange={(e) => setQuery(e.target.value)} className="flex-grow font-inter-regular pr-1 py-2.5 text-sm bg-transparent border-none outline-none text-neutral-900 placeholder-neutral-500" placeholder="Search product here..." type="search" />
                                   <button className="p-2.5 text-neutral-500 hover:text-primary transition-colors" type="submit">
                                        <FiSearch className='text-xl mr-2' />
                                   </button>
                              </form>

                              <div className="mt-4">
                                   <h4 className="text-black font-inter-medium">Popular search terms</h4>
                                   <div className="flex flex-wrap gap-2 mt-3 font-inter-regular">
                                        <button onClick={() => setQuery('Mixers')} className="px-3 py-1 bg-neutral-100 rounded text-sm">Mixers</button>
                                        <button onClick={() => setQuery('Diagrams')} className="px-3 py-1 bg-neutral-100 rounded text-sm">Diagrams</button>
                                        <button onClick={() => setQuery('Amplifiers')} className="px-3 py-1 bg-neutral-100 rounded text-sm">Amplifiers</button>
                                   </div>
                              </div>

                              <div className="mt-6 divide-y divide-neutral-100">
                                   {filtered.slice(0, 5).map((p) => (
                                        <div key={p.id} className="py-4 flex items-start gap-4">
                                             <div className="w-20 h-20 bg-neutral-100 rounded flex items-center justify-center">
                                                  <div className="text-xs text-neutral-500">image</div>
                                             </div>
                                             <div className="flex-1">
                                                  <div className="font-inter-medium text-base text-neutral-900">{p.title}</div>
                                                  <div className="text-sm font-inter-regular text-neutral-500">{p.category}</div>
                                                  <div className="text-sm font-inter-regular text-neutral-900 mt-2">{p.price}</div>
                                             </div>
                                        </div>
                                   ))}
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
}

export default MiniProductCardComponent;
