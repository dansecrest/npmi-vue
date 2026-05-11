export {}

declare module 'vue-router' {
  interface RouteMeta {
    layout?: string
    mainClass?: string
  }
}
