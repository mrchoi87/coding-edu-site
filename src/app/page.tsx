import Image from "next/image";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10 text-center bg-gray-50">
      <h1 className="text-4xl font-bold mb-6">코딩 교육 홈페이지에 오신 것을 환영합니다</h1>
      <p className="text-lg mb-6">
        초·중·고 대상 맞춤형 코딩 교육, 공모전 준비, 실습 중심 수업을 제공합니다.
      </p>
      <a href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
        수강 문의하기
      </a>
    </main>
  )
}