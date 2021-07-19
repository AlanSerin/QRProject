export default function ({redirect,route}) {
  let isMaintenance = process.env.maintenance;
  if(isMaintenance === "true"){
    return redirect('/maintenance')
  }
  if(isMaintenance === "false" && route.path === '/maintenance'){
    return redirect('/')
  }
}
