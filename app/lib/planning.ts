import { saigonDate } from './calendar';
import type { Plan, PlanStop } from './types';

const clockPattern=/^([01]\d|2[0-3]):[0-5]\d$/;

/** Move venues and their notes between existing time slots without changing the schedule. */
export function reorderPlanStops(stops:PlanStop[],from:number,to:number):PlanStop[]{
  if(!Number.isInteger(from)||!Number.isInteger(to)||from<0||to<0||from>=stops.length||to>=stops.length)return [...stops];
  const reordered=[...stops];
  const [moved]=reordered.splice(from,1);
  reordered.splice(to,0,moved);
  return reordered.map((stop,index)=>({...stop,time:stops[index].time}));
}

/** A same-day plan cannot add a stop after 23:59. Invalid blank inputs wait for correction. */
export function nextStopTime(stops:PlanStop[]):string|null{
  const last=stops.at(-1)?.time;
  if(!last||!clockPattern.test(last))return null;
  const [hour,minute]=last.split(':').map(Number);
  const current=hour*60+minute;
  if(current>=1439)return null;
  const next=Math.min(current+90,1439);
  return `${String(Math.floor(next/60)).padStart(2,'0')}:${String(next%60).padStart(2,'0')}`;
}

export function validPlanTimes(start:string,stops:PlanStop[]):boolean{
  return clockPattern.test(start)&&stops.length>0&&stops.every((stop,index)=>clockPattern.test(stop.time)&&(index?stop.time>stops[index-1].time:stop.time>=start));
}

/** Compare wall-clock appointments with the current minute in Vietnam, regardless of browser zone. */
export function nextUpcomingPlan(plans:Plan[],now:Date=new Date()):Plan|undefined{
  const parts=new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Ho_Chi_Minh',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(now);
  const time=`${parts.find(part=>part.type==='hour')!.value}:${parts.find(part=>part.type==='minute')!.value}`;
  const current=`${saigonDate(now)}T${time}`;
  return plans.filter(plan=>plan.status==='planned'&&`${plan.date}T${plan.time}`>=current).sort((a,b)=>`${a.date}T${a.time}`.localeCompare(`${b.date}T${b.time}`))[0];
}
