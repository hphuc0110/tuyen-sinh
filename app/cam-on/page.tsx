"use client"

import { useEffect } from "react"
import "./ThankYou.css"

declare global {
  interface Window {
    fbq?: (...args: any[]) => void
    _fbq?: any
  }
}

export default function ThankYou() {
  useEffect(() => {
    if (!window.fbq) {
      ((f: any, b: Document, e: string, v: string) => {
        if (f.fbq) return

        const n: any = function (...args: any[]) {
          if (n.callMethod) {
            n.callMethod.apply(n, args)
          } else {
            n.queue.push(args)
          }
        }

        if (!f._fbq) f._fbq = n

        n.push = n
        n.loaded = true
        n.version = "2.0"
        n.queue = []

        const t = b.createElement(e) as HTMLScriptElement
        t.async = true
        t.src = v

        const s = b.getElementsByTagName(e)[0]
        s.parentNode?.insertBefore(t, s)

        f.fbq = n
      })(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js"
      )
    }

    window.fbq?.("init", "1192207086378039")
    window.fbq?.("track", "PageView")
    window.fbq?.("track", "Lead")
  }, [])

  return (
    <>
      <div className="ai-bg" aria-hidden="true">
        <div className="grid"></div>
        <div className="glow g1"></div>
        <div className="glow g2"></div>

        <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <line x1="120" y1="160" x2="300" y2="280" />
          <line x1="300" y1="280" x2="180" y2="460" />
          <line x1="300" y1="280" x2="520" y2="220" />
          <line x1="520" y1="220" x2="700" y2="340" />
          <line x1="700" y1="340" x2="900" y2="240" />
          <line x1="900" y1="240" x2="1060" y2="400" />
          <line x1="700" y1="340" x2="640" y2="560" />
          <line x1="180" y1="460" x2="420" y2="600" />
          <line x1="420" y1="600" x2="640" y2="560" />
          <line x1="900" y1="240" x2="1080" y2="150" />
          <line x1="520" y1="220" x2="560" y2="80" />
          <line x1="640" y1="560" x2="840" y2="640" />

          <circle className="node" cx="120" cy="160" r="4" />
          <circle
            className="node"
            cx="300"
            cy="280"
            r="5"
            style={{ animationDelay: ".3s" }}
          />
          <circle
            className="node"
            cx="180"
            cy="460"
            r="4"
            style={{ animationDelay: ".6s" }}
          />
          <circle
            className="node"
            cx="520"
            cy="220"
            r="5"
            style={{ animationDelay: ".9s" }}
          />
          <circle
            className="node"
            cx="700"
            cy="340"
            r="6"
            style={{ animationDelay: "1.2s" }}
          />
          <circle
            className="node"
            cx="900"
            cy="240"
            r="5"
            style={{ animationDelay: "1.5s" }}
          />
          <circle
            className="node"
            cx="1060"
            cy="400"
            r="4"
            style={{ animationDelay: "1.8s" }}
          />
          <circle
            className="node"
            cx="640"
            cy="560"
            r="5"
            style={{ animationDelay: "2.1s" }}
          />
          <circle
            className="node"
            cx="420"
            cy="600"
            r="4"
            style={{ animationDelay: "2.4s" }}
          />
          <circle
            className="node"
            cx="1080"
            cy="150"
            r="4"
            style={{ animationDelay: "2.7s" }}
          />
          <circle
            className="node"
            cx="560"
            cy="80"
            r="3"
            style={{ animationDelay: "1.1s" }}
          />
          <circle
            className="node"
            cx="840"
            cy="640"
            r="4"
            style={{ animationDelay: ".5s" }}
          />
        </svg>
      </div>

      <main className="card">

        <div className="check">
          <svg viewBox="0 0 52 52">
            <path
              d="M14 27 l8 8 l16 -18"
              stroke="#fff"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="60"
              strokeDashoffset="60"
            />
          </svg>
        </div>

        <h2 className="text-2xl font-bold text-center text-white">
          Cảm ơn anh/chị đã <span className="hl">đăng ký tư vấn</span> cho con!
        </h2>

        <p className="lead">
          Thông tin của anh/chị đã được ghi nhận thành công. Chuyên viên của{" "}
          <b>AI57</b> sẽ liên hệ trong thời gian sớm nhất để tư vấn lộ trình học
          phù hợp cho con.
        </p>

        <section className="next">
          <h2>Điều gì diễn ra tiếp theo</h2>

          <div className="step">
            <span className="n">1</span>
            <p>
              Chuyên viên AI57 <b>gọi điện tư vấn</b> lộ trình riêng theo độ tuổi
              và năng lực của con.
            </p>
          </div>

          <div className="step">
            <span className="n">2</span>
            <p>
              Anh/chị nhận <b>lộ trình chi tiết</b> và thông tin lớp khai giảng
              sắp tới.
            </p>
          </div>

          <div className="step">
            <span className="n">3</span>
            <p>
              Giữ <b>suất học giới hạn</b> cho con nếu anh/chị quyết định đồng
              hành cùng AI57.
            </p>
          </div>
        </section>

        <p className="hotline">
          Cần hỗ trợ ngay? Gọi hotline
          <br />
          <a href="tel:0996963399">099 696 3399</a>
        </p>

        <a
          className="btn"
          href="https://tuyensinhai57.honglinheducation.vn/"
        >
          Quay lại trang chủ
        </a>
      </main>

      <noscript>
        <img
          height={1}
          width={1}
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1192207086378039&ev=Lead&noscript=1"
          alt=""
        />
      </noscript>
    </>
  )
}
