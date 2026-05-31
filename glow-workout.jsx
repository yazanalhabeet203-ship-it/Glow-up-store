import { useState } from "react";

const workouts = {
  glutes: [
    {
      id: 1,
      name: "Hip Thrust",
      nameAr: "رفع الوركين",
      sets: "4 جلسات",
      reps: "12-15 تكرار",
      rest: "60 ثانية راحة",
      level: "مبتدئ",
      tip: "اضغطي على عضلات المؤخرة في أعلى الحركة لثانية كاملة",
      emoji: "🍑",
      color: "#FF6B9D",
    },
    {
      id: 2,
      name: "Romanian Deadlift",
      nameAr: "الرفعة الرومانية",
      sets: "3 جلسات",
      reps: "10-12 تكرار",
      rest: "90 ثانية راحة",
      level: "متوسط",
      tip: "أبقي ظهرك مستقيماً وادفعي الوركين للخلف",
      emoji: "💪",
      color: "#C850C0",
    },
    {
      id: 3,
      name: "Sumo Squat",
      nameAr: "السكوات السومو",
      sets: "4 جلسات",
      reps: "15 تكرار",
      rest: "60 ثانية راحة",
      level: "مبتدئ",
      tip: "افتحي قدميكِ على عرض أكبر من الكتفين مع توجيه أصابع القدم للخارج",
      emoji: "✨",
      color: "#FF6B9D",
    },
    {
      id: 4,
      name: "Donkey Kicks",
      nameAr: "ركلات الحمار",
      sets: "3 جلسات",
      reps: "20 تكرار لكل جهة",
      rest: "45 ثانية راحة",
      level: "مبتدئ",
      tip: "ابقي الركبة منحنية 90 درجة وارفعي القدم نحو السقف",
      emoji: "🔥",
      color: "#FF8C42",
    },
    {
      id: 5,
      name: "Bulgarian Split Squat",
      nameAr: "السكوات البلغاري",
      sets: "3 جلسات",
      reps: "10 تكرار لكل جهة",
      rest: "90 ثانية راحة",
      level: "متقدم",
      tip: "ضعي القدم الخلفية على كرسي وانزلي ببطء",
      emoji: "⚡",
      color: "#C850C0",
    },
    {
      id: 6,
      name: "Glute Bridge",
      nameAr: "جسر الأرداف",
      sets: "4 جلسات",
      reps: "20 تكرار",
      rest: "45 ثانية راحة",
      level: "مبتدئ",
      tip: "مناسب للمبتدئين - ارفعي الوركين ببطء مع الضغط على المؤخرة",
      emoji: "💎",
      color: "#FF6B9D",
    },
  ],
  chest: [
    {
      id: 7,
      name: "Push Up",
      nameAr: "تمرين الضغط",
      sets: "3 جلسات",
      reps: "12-15 تكرار",
      rest: "60 ثانية راحة",
      level: "مبتدئ",
      tip: "يمكنك البدء على الركبتين ثم الانتقال للنسخة الكاملة تدريجياً",
      emoji: "🌸",
      color: "#FF6B9D",
    },
    {
      id: 8,
      name: "Chest Press",
      nameAr: "ضغط الصدر بالدمبل",
      sets: "4 جلسات",
      reps: "12 تكرار",
      rest: "75 ثانية راحة",
      level: "متوسط",
      tip: "أنزلي الدمبل حتى مستوى الصدر ثم ارفعيهم مع الضغط على العضلة",
      emoji: "💗",
      color: "#C850C0",
    },
    {
      id: 9,
      name: "Chest Fly",
      nameAr: "تمرين الفراشة",
      sets: "3 جلسات",
      reps: "12-15 تكرار",
      rest: "60 ثانية راحة",
      level: "متوسط",
      tip: "أبقي مرفقيكِ منحنيين قليلاً واشعري بالشد في الصدر",
      emoji: "🦋",
      color: "#FF6B9D",
    },
    {
      id: 10,
      name: "Incline Push Up",
      nameAr: "الضغط المائل للأعلى",
      sets: "3 جلسات",
      reps: "15 تكرار",
      rest: "60 ثانية راحة",
      level: "مبتدئ",
      tip: "استخدمي طاولة أو كرسي لتحدي الجزء العلوي من الصدر",
      emoji: "⬆️",
      color: "#FF8C42",
    },
    {
      id: 11,
      name: "Cable Crossover",
      nameAr: "تقاطع الكيبل",
      sets: "3 جلسات",
      reps: "15 تكرار",
      rest: "60 ثانية راحة",
      level: "متقدم",
      tip: "حافظي على ظهر مستقيم وجيبي يديكِ معاً أمامك مع الشعور بالضغط",
      emoji: "✚",
      color: "#C850C0",
    },
    {
      id: 12,
      name: "Dumbbell Pullover",
      nameAr: "سحب الدمبل للخلف",
      sets: "3 جلسات",
      reps: "12 تكرار",
      rest: "75 ثانية راحة",
      level: "متوسط",
      tip: "يعمل على توسيع القفص الصدري وتحسين شكل الصدر",
      emoji: "🌟",
      color: "#FF6B9D",
    },
  ],
};

const levelColors = {
  "مبتدئ": { bg: "rgba(100,220,100,0.15)", text: "#4CAF50" },
  "متوسط": { bg: "rgba(255,193,7,0.15)", text: "#FFC107" },
  "متقدم": { bg: "rgba(244,67,54,0.15)", text: "#F44336" },
};

export default function GlowWorkoutApp() {
  const [activeTab, setActiveTab] = useState("glutes");
  const [completed, setCompleted] = useState(new Set());
  const [expanded, setExpanded] = useState(null);

  const toggleComplete = (id) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const currentWorkouts = workouts[activeTab];
  const doneCount = currentWorkouts.filter((w) => completed.has(w.id)).length;
  const progress = (doneCount / currentWorkouts.length) * 100;

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #1a0a1e 0%, #2d0d35 40%, #1a0a1e 100%)",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      direction: "rtl",
      padding: "0 0 40px 0",
    }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #FF6B9D, #C850C0, #FF6B9D)",
        backgroundSize: "200% 200%",
        padding: "32px 20px 28px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          background: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)",
        }} />
        <div style={{ fontSize: "42px", marginBottom: "6px" }}>🌸</div>
        <h1 style={{
          color: "white", margin: 0, fontSize: "26px", fontWeight: "800",
          textShadow: "0 2px 10px rgba(0,0,0,0.3)",
          letterSpacing: "1px",
        }}>
          Glow Fit
        </h1>
        <p style={{ color: "rgba(255,255,255,0.85)", margin: "6px 0 0", fontSize: "14px" }}>
          تمارين نسائية متخصصة ✨
        </p>
      </div>

      {/* Tab Switcher */}
      <div style={{ padding: "20px 16px 0" }}>
        <div style={{
          background: "rgba(255,255,255,0.06)",
          borderRadius: "16px",
          padding: "5px",
          display: "flex",
          gap: "6px",
          border: "1px solid rgba(255,107,157,0.2)",
        }}>
          {[
            { key: "glutes", label: "تكبير الأرداف", icon: "🍑" },
            { key: "chest", label: "تقوية الصدر", icon: "💗" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              style={{
                flex: 1,
                padding: "12px 8px",
                borderRadius: "12px",
                border: "none",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "700",
                fontFamily: "inherit",
                transition: "all 0.3s ease",
                background: activeTab === tab.key
                  ? "linear-gradient(135deg, #FF6B9D, #C850C0)"
                  : "transparent",
                color: activeTab === tab.key ? "white" : "rgba(255,255,255,0.5)",
                boxShadow: activeTab === tab.key
                  ? "0 4px 15px rgba(255,107,157,0.4)"
                  : "none",
              }}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Progress */}
      <div style={{ padding: "16px 16px 0" }}>
        <div style={{
          background: "rgba(255,255,255,0.06)",
          borderRadius: "14px",
          padding: "16px",
          border: "1px solid rgba(255,107,157,0.15)",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px" }}>تقدم التمرين اليوم</span>
            <span style={{
              color: "#FF6B9D", fontWeight: "800", fontSize: "15px",
            }}>{doneCount}/{currentWorkouts.length}</span>
          </div>
          <div style={{
            background: "rgba(255,255,255,0.1)",
            borderRadius: "10px",
            height: "8px",
            overflow: "hidden",
          }}>
            <div style={{
              height: "100%",
              width: `${progress}%`,
              background: "linear-gradient(90deg, #FF6B9D, #C850C0)",
              borderRadius: "10px",
              transition: "width 0.5s ease",
            }} />
          </div>
          {progress === 100 && (
            <p style={{ color: "#FF6B9D", textAlign: "center", margin: "10px 0 0", fontSize: "14px", fontWeight: "700" }}>
              🎉 أحسنتِ! أكملتِ التمرين كاملاً!
            </p>
          )}
        </div>
      </div>

      {/* Workout Cards */}
      <div style={{ padding: "16px" }}>
        {currentWorkouts.map((exercise) => {
          const isExpanded = expanded === exercise.id;
          const isDone = completed.has(exercise.id);
          const lvl = levelColors[exercise.level];

          return (
            <div
              key={exercise.id}
              style={{
                background: isDone
                  ? "rgba(255,107,157,0.08)"
                  : "rgba(255,255,255,0.05)",
                borderRadius: "18px",
                marginBottom: "12px",
                border: isDone
                  ? "1px solid rgba(255,107,157,0.4)"
                  : "1px solid rgba(255,255,255,0.08)",
                overflow: "hidden",
                transition: "all 0.3s ease",
              }}
            >
              {/* Card Header */}
              <div
                onClick={() => setExpanded(isExpanded ? null : exercise.id)}
                style={{
                  padding: "16px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                {/* Emoji Circle */}
                <div style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  background: `linear-gradient(135deg, ${exercise.color}30, ${exercise.color}15)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                  flexShrink: 0,
                  border: `1px solid ${exercise.color}40`,
                }}>
                  {exercise.emoji}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px", flexWrap: "wrap" }}>
                    <span style={{ color: "white", fontWeight: "700", fontSize: "15px" }}>
                      {exercise.nameAr}
                    </span>
                    <span style={{
                      fontSize: "11px",
                      padding: "2px 8px",
                      borderRadius: "20px",
                      background: lvl.bg,
                      color: lvl.text,
                      fontWeight: "600",
                    }}>
                      {exercise.level}
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                    <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px" }}>🔁 {exercise.sets}</span>
                    <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px" }}>✦ {exercise.reps}</span>
                  </div>
                </div>

                {/* Done Button */}
                <button
                  onClick={(e) => { e.stopPropagation(); toggleComplete(exercise.id); }}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    border: isDone ? "none" : "2px solid rgba(255,107,157,0.4)",
                    background: isDone
                      ? "linear-gradient(135deg, #FF6B9D, #C850C0)"
                      : "transparent",
                    color: isDone ? "white" : "rgba(255,107,157,0.6)",
                    fontSize: "16px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "all 0.3s ease",
                    boxShadow: isDone ? "0 4px 12px rgba(255,107,157,0.4)" : "none",
                  }}
                >
                  {isDone ? "✓" : "○"}
                </button>
              </div>

              {/* Expanded Details */}
              {isExpanded && (
                <div style={{
                  padding: "0 16px 16px",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  paddingTop: "14px",
                }}>
                  <div style={{
                    background: "rgba(255,107,157,0.08)",
                    borderRadius: "12px",
                    padding: "14px",
                    marginBottom: "12px",
                    border: "1px solid rgba(255,107,157,0.15)",
                  }}>
                    <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "12px", margin: "0 0 4px", fontWeight: "600" }}>
                      💡 نصيحة التمرين
                    </p>
                    <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "13px", margin: 0, lineHeight: "1.6" }}>
                      {exercise.tip}
                    </p>
                  </div>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <div style={{
                      flex: 1,
                      background: "rgba(255,255,255,0.05)",
                      borderRadius: "10px",
                      padding: "10px",
                      textAlign: "center",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}>
                      <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px", margin: "0 0 2px" }}>الراحة</p>
                      <p style={{ color: "white", fontSize: "13px", fontWeight: "700", margin: 0 }}>{exercise.rest}</p>
                    </div>
                    <div style={{
                      flex: 1,
                      background: "rgba(255,255,255,0.05)",
                      borderRadius: "10px",
                      padding: "10px",
                      textAlign: "center",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}>
                      <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px", margin: "0 0 2px" }}>التكرارات</p>
                      <p style={{ color: "white", fontSize: "13px", fontWeight: "700", margin: 0 }}>{exercise.reps}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer tip */}
      <div style={{ padding: "0 16px" }}>
        <div style={{
          background: "linear-gradient(135deg, rgba(255,107,157,0.1), rgba(200,80,192,0.1))",
          borderRadius: "16px",
          padding: "16px",
          textAlign: "center",
          border: "1px solid rgba(255,107,157,0.2)",
        }}>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", margin: 0, lineHeight: "1.7" }}>
            💪 للحصول على أفضل النتائج، مارسي هذه التمارين <strong style={{color:"#FF6B9D"}}>3-4 مرات أسبوعياً</strong> مع الالتزام بالتغذية الصحية وشرب الماء الكافي
          </p>
        </div>
      </div>
    </div>
  );
}
