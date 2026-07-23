import { useState, useEffect } from 'react';
import { curriculum } from './data/curriculum';

function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const [progress, setProgress] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const saved = localStorage.getItem('upworkTrackerProgress');
    if (saved) {
      try {
        setProgress(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse progress", e);
      }
    }
  }, []);

  const saveProgress = (newProgress: Record<string, boolean>) => {
    setProgress(newProgress);
    localStorage.setItem('upworkTrackerProgress', JSON.stringify(newProgress));
  };

  const toggleLesson = (lessonId: string) => {
    const next = { ...progress, [lessonId]: !progress[lessonId] };
    saveProgress(next);
  };

  const calculatePhaseProgress = (phaseId: string) => {
    const phase = curriculum.find(p => p.id === phaseId);
    if (!phase) return 0;
    const completed = phase.lessons.filter(l => progress[l.id]).length;
    return Math.round((completed / phase.lessons.length) * 100);
  };

  const totalProgress = () => {
    const allLessons = curriculum.flatMap(p => p.lessons);
    const completed = allLessons.filter(l => progress[l.id]).length;
    return Math.round((completed / allLessons.length) * 100);
  };

  if (!unlocked) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-slate-800 p-8 rounded-xl shadow-xl max-w-md w-full border border-slate-700">
          <h1 className="text-2xl font-bold mb-2 text-center">Remote Blueprint Tracker</h1>
          <p className="text-slate-400 mb-6 text-center text-sm">Masukkan password akses untuk membuka tracker.</p>
          <div className="flex gap-2">
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password..."
              className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:border-upwork"
              onKeyDown={(e) => { if (e.key === 'Enter' && password === 'GTM2026') setUnlocked(true); }}
            />
            <button 
              onClick={() => { if (password === 'GTM2026') setUnlocked(true); else alert('Password salah!'); }}
              className="bg-upwork hover:bg-upworkDark text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Akses
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-4xl mx-auto">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Remote Blueprint Tracker</h1>
        <p className="text-slate-400">Track perjalanan Upwork kamu. Data disimpan lokal di browser ini.</p>
        
        <div className="mt-6 bg-slate-800 rounded-lg p-4 border border-slate-700">
          <div className="flex justify-between mb-2">
            <span className="font-medium text-sm text-slate-300">Total Progres</span>
            <span className="font-bold text-upwork">{totalProgress()}%</span>
          </div>
          <div className="w-full bg-slate-900 rounded-full h-2.5">
            <div className="bg-upwork h-2.5 rounded-full transition-all duration-500" style={{ width: `${totalProgress()}%` }}></div>
          </div>
        </div>
      </header>

      <main className="space-y-8">
        {curriculum.map((phase) => {
          const phaseProgress = calculatePhaseProgress(phase.id);
          return (
            <div key={phase.id} className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
              <div className="p-6 border-b border-slate-700 bg-slate-800/50">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-bold">{phase.title}</h2>
                  <span className="bg-slate-900 text-upwork text-xs font-bold px-3 py-1 rounded-full border border-slate-700">
                    {phaseProgress}%
                  </span>
                </div>
                <p className="text-slate-400 text-sm">{phase.description}</p>
              </div>
              
              <div className="divide-y divide-slate-700/50">
                {phase.lessons.map((lesson) => {
                  const isDone = progress[lesson.id];
                  return (
                    <div key={lesson.id} className={`p-4 md:p-6 transition-colors ${isDone ? 'bg-slate-800/30' : ''}`}>
                      <label className="flex items-start gap-4 cursor-pointer group">
                        <div className="mt-1">
                          <input 
                            type="checkbox" 
                            checked={isDone || false}
                            onChange={() => toggleLesson(lesson.id)}
                            className="w-5 h-5 rounded border-slate-600 text-upwork focus:ring-upwork focus:ring-offset-slate-800 bg-slate-900 cursor-pointer"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className={`font-semibold mb-1 ${isDone ? 'text-slate-400 line-through' : 'text-slate-200 group-hover:text-upwork transition-colors'}`}>
                            {lesson.title}
                          </h3>
                          <p className={`text-sm ${isDone ? 'text-slate-500' : 'text-slate-400'}`}>
                            {lesson.content}
                          </p>
                        </div>
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default App;
