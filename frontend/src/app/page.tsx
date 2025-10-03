import PingTest from '@/components/PingTest';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Department Information System
          </h1>
          <p className="text-lg text-gray-600">
            A comprehensive system for managing department operations
          </p>
        </header>
        
        <main>
          <PingTest />
        </main>
      </div>
    </div>
  );
}
