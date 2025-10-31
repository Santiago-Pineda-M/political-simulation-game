import { Heart, Scale, TrendingUp, Shield } from "lucide-react"

type StatsBarProps = {
  stats: {
    popularidad: number
    derechos: number
    economia: number
    estabilidad: number
  }
  pais: string
}

export default function StatsBar({ stats, pais }: StatsBarProps) {
  const getStatColor = (value: number) => {
    if (value >= 5) return "text-retro-green"
    if (value <= -5) return "text-retro-red"
    return "text-retro-white"
  }

  return (
    <div className="stats-bar">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-2 md:gap-4">
        <div
          className="hidden md:block text-retro-yellow font-bold"
          style={{ fontFamily: "Press Start 2P, monospace", fontSize: "0.7rem" }}
        >
          {pais.toUpperCase()}
        </div>

        <div className="flex-1 grid grid-cols-4 gap-2 md:gap-3">
          {/* Popularidad */}
          <div className="flex items-center gap-1 md:gap-2 bg-retro-dark border-2 border-retro-red px-2 py-2">
            <Heart className="h-3 w-3 md:h-4 md:w-4 text-retro-red flex-shrink-0" strokeWidth={3} />
            <div className="min-w-0">
              <p className="text-retro-gray hidden md:block" style={{ fontSize: "0.45rem" }}>
                POP
              </p>
              <p className={`font-bold ${getStatColor(stats.popularidad)}`} style={{ fontSize: "0.65rem" }}>
                {stats.popularidad > 0 ? "+" : ""}
                {stats.popularidad}
              </p>
            </div>
          </div>

          {/* Derechos */}
          <div className="flex items-center gap-1 md:gap-2 bg-retro-dark border-2 border-retro-blue px-2 py-2">
            <Scale className="h-3 w-3 md:h-4 md:w-4 text-retro-blue flex-shrink-0" strokeWidth={3} />
            <div className="min-w-0">
              <p className="text-retro-gray hidden md:block" style={{ fontSize: "0.45rem" }}>
                DER
              </p>
              <p className={`font-bold ${getStatColor(stats.derechos)}`} style={{ fontSize: "0.65rem" }}>
                {stats.derechos > 0 ? "+" : ""}
                {stats.derechos}
              </p>
            </div>
          </div>

          {/* Economia */}
          <div className="flex items-center gap-1 md:gap-2 bg-retro-dark border-2 border-retro-green px-2 py-2">
            <TrendingUp className="h-3 w-3 md:h-4 md:w-4 text-retro-green flex-shrink-0" strokeWidth={3} />
            <div className="min-w-0">
              <p className="text-retro-gray hidden md:block" style={{ fontSize: "0.45rem" }}>
                ECO
              </p>
              <p className={`font-bold ${getStatColor(stats.economia)}`} style={{ fontSize: "0.65rem" }}>
                {stats.economia > 0 ? "+" : ""}
                {stats.economia}
              </p>
            </div>
          </div>

          {/* Estabilidad */}
          <div className="flex items-center gap-1 md:gap-2 bg-retro-dark border-2 border-retro-yellow px-2 py-2">
            <Shield className="h-3 w-3 md:h-4 md:w-4 text-retro-yellow flex-shrink-0" strokeWidth={3} />
            <div className="min-w-0">
              <p className="text-retro-gray hidden md:block" style={{ fontSize: "0.45rem" }}>
                EST
              </p>
              <p className={`font-bold ${getStatColor(stats.estabilidad)}`} style={{ fontSize: "0.65rem" }}>
                {stats.estabilidad > 0 ? "+" : ""}
                {stats.estabilidad}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
