# 📚 Database Schema Documentation

هذا الملف يحتوي على توثيق كامل لجميع جداول قاعدة البيانات في المشروع.

---

## 📋 قائمة الجداول (84 جدول)

| # | اسم الجدول | الوصف |
|---|-----------|-------|
| 1 | achievements | الإنجازات |
| 2 | activity_logs | سجلات النشاط |
| 3 | adaptive_learning_paths | مسارات التعلم التكيفية |
| 4 | ai_conversations | محادثات الذكاء الاصطناعي |
| 5 | ai_development_history | سجل تطوير الذكاء الاصطناعي |
| 6 | ai_development_improvements | تحسينات التطوير |
| 7 | ai_development_issues | مشاكل التطوير |
| 8 | ai_development_metrics | مقاييس التطوير |
| 9 | ai_messages | رسائل الذكاء الاصطناعي |
| 10 | ai_summaries | ملخصات الذكاء الاصطناعي |
| 11 | announcements | الإعلانات |
| 12 | app_settings | إعدادات التطبيق |
| 13 | assessments | التقييمات |
| 14 | auth_rate_limits | حدود معدل المصادقة |
| 15 | backups_log | سجل النسخ الاحتياطية |
| 16 | badges | الشارات |
| 17 | blocked_ips | عناوين IP المحظورة |
| 18 | cheating_reports | تقارير الغش |
| 19 | courses | الدورات |
| 20 | design_elements | عناصر التصميم |
| 21 | email_templates | قوالب البريد الإلكتروني |
| 22 | enrollment_codes | أكواد التسجيل |
| 23 | enrollments | التسجيلات |
| 24 | feature_flags | أعلام الميزات |
| 25 | flashcards | البطاقات التعليمية |
| 26 | group_members | أعضاء المجموعات |
| 27 | group_messages | رسائل المجموعات |
| 28 | groups | المجموعات |
| 29 | leaderboard_cache | ذاكرة التصنيف |
| 30 | lesson_materials | مواد الدروس |
| 31 | lesson_progress | تقدم الدروس |
| 32 | lessons | الدروس |
| 33 | meeting_recordings | تسجيلات الاجتماعات |
| 34 | message_reactions | تفاعلات الرسائل |
| 35 | messages | الرسائل |
| 36 | notification_preferences | تفضيلات الإشعارات |
| 37 | notifications | الإشعارات |
| 38 | parent_students | علاقة الآباء والطلاب |
| 39 | parent_teacher_messages | رسائل الآباء والمعلمين |
| 40 | parent_whatsapp_messages | رسائل واتساب الآباء |
| 41 | parents | أولياء الأمور |
| 42 | payment_confirmations | تأكيدات الدفع |
| 43 | payment_gateways | بوابات الدفع |
| 44 | performance_reports | تقارير الأداء |
| 45 | pro_plans | الخطط المميزة |
| 46 | pro_subscriptions | اشتراكات Pro |
| 47 | profiles | الملفات الشخصية |
| 48 | public_teachers | المعلمين العامين (View) |
| 49 | quiz_attempts | محاولات الاختبارات |
| 50 | quizzes | الاختبارات |
| 51 | scheduled_announcements | الإعلانات المجدولة |
| 52 | security_threats | التهديدات الأمنية |
| 53 | security_violations | المخالفات الأمنية |
| 54 | site_settings | إعدادات الموقع |
| 55 | site_templates | قوالب الموقع |
| 56 | smart_assessments | التقييمات الذكية |
| 57 | student_achievements | إنجازات الطلاب |
| 58 | student_badges | شارات الطلاب |
| 59 | student_flashcard_progress | تقدم البطاقات التعليمية |
| 60 | student_points | نقاط الطلاب |
| 61 | student_progress | تقدم الطلاب |
| 62 | student_teacher_selections | اختيارات المعلمين للطلاب |
| 63 | student_zoom_meetings | اجتماعات زوم للطلاب (View) |
| 64 | students | الطلاب |
| 65 | study_guides | أدلة الدراسة |
| 66 | subscriptions | الاشتراكات |
| 67 | support_messages | رسائل الدعم |
| 68 | support_tickets | تذاكر الدعم |
| 69 | system_logs | سجلات النظام |
| 70 | teacher_achievements | إنجازات المعلمين |
| 71 | teacher_challenges | تحديات المعلمين |
| 72 | teacher_gamification_settings | إعدادات التلعيب للمعلمين |
| 73 | teacher_payment_info | معلومات دفع المعلمين |
| 74 | teacher_requests | طلبات المعلمين |
| 75 | teachers | المعلمين |
| 76 | teaching_scenarios | سيناريوهات التدريس |
| 77 | two_factor_auth | المصادقة الثنائية |
| 78 | two_factor_codes | أكواد المصادقة الثنائية |
| 79 | two_factor_settings | إعدادات المصادقة الثنائية |
| 80 | user_bans | حظر المستخدمين |
| 81 | user_roles | أدوار المستخدمين |
| 82 | user_sessions | جلسات المستخدمين |
| 83 | user_warnings | تحذيرات المستخدمين |
| 84 | virtual_labs | المعامل الافتراضية |
| 85 | virtual_tutors | المعلمين الافتراضيين |
| 86 | zoom_meetings | اجتماعات زوم |

---

## 🗂️ تفاصيل الجداول

### 1. achievements (الإنجازات)
| العمود | النوع | مطلوب | القيمة الافتراضية |
|--------|------|-------|------------------|
| id | uuid | ✅ | gen_random_uuid() |
| name_ar | varchar | ✅ | - |
| name_en | varchar | ✅ | - |
| description_ar | text | ❌ | - |
| description_en | text | ❌ | - |
| type | varchar | ✅ | 'general' |
| target_value | integer | ❌ | 1 |
| points_reward | integer | ❌ | 10 |
| icon | varchar | ❌ | 'award' |
| is_active | boolean | ❌ | true |
| created_at | timestamptz | ✅ | now() |

---

### 2. activity_logs (سجلات النشاط)
| العمود | النوع | مطلوب | القيمة الافتراضية |
|--------|------|-------|------------------|
| id | uuid | ✅ | gen_random_uuid() |
| user_id | uuid | ✅ | - |
| user_type | varchar | ✅ | - |
| activity_type | varchar | ✅ | - |
| activity_data | jsonb | ❌ | - |
| course_id | uuid | ❌ | - |
| lesson_id | uuid | ❌ | - |
| points_earned | integer | ❌ | 0 |
| created_at | timestamptz | ✅ | now() |

---

### 3. adaptive_learning_paths (مسارات التعلم التكيفية)
| العمود | النوع | مطلوب | القيمة الافتراضية |
|--------|------|-------|------------------|
| id | uuid | ✅ | gen_random_uuid() |
| teacher_id | uuid | ✅ | - |
| name | varchar | ✅ | - |
| description | text | ❌ | - |
| target_level | varchar | ❌ | 'intermediate' |
| is_active | boolean | ❌ | true |
| settings | jsonb | ❌ | '{}' |
| created_at | timestamptz | ✅ | now() |
| updated_at | timestamptz | ✅ | now() |

---

### 4. ai_conversations (محادثات الذكاء الاصطناعي)
| العمود | النوع | مطلوب | القيمة الافتراضية |
|--------|------|-------|------------------|
| id | uuid | ✅ | gen_random_uuid() |
| user_id | uuid | ✅ | - |
| course_id | uuid | ❌ | - |
| lesson_id | uuid | ❌ | - |
| context_type | text | ✅ | 'general' |
| created_at | timestamptz | ❌ | now() |
| updated_at | timestamptz | ❌ | now() |

---

### 5. ai_messages (رسائل الذكاء الاصطناعي)
| العمود | النوع | مطلوب | القيمة الافتراضية |
|--------|------|-------|------------------|
| id | uuid | ✅ | gen_random_uuid() |
| conversation_id | uuid | ❌ | - |
| role | text | ✅ | - |
| content | text | ✅ | - |
| created_at | timestamptz | ❌ | now() |

---

### 6. announcements (الإعلانات)
| العمود | النوع | مطلوب | القيمة الافتراضية |
|--------|------|-------|------------------|
| id | uuid | ✅ | gen_random_uuid() |
| author_id | uuid | ✅ | - |
| title | text | ✅ | - |
| content | text | ✅ | - |
| target_role | app_role | ❌ | - |
| is_pinned | boolean | ❌ | false |
| created_at | timestamptz | ❌ | now() |

---

### 7. assessments (التقييمات)
| العمود | النوع | مطلوب | القيمة الافتراضية |
|--------|------|-------|------------------|
| id | uuid | ✅ | gen_random_uuid() |
| student_id | uuid | ✅ | - |
| course_id | uuid | ✅ | - |
| lesson_id | uuid | ❌ | - |
| title | text | ✅ | - |
| score | numeric | ❌ | - |
| max_score | numeric | ❌ | 100 |
| feedback | text | ❌ | - |
| assessed_at | timestamptz | ❌ | now() |

---

### 8. badges (الشارات)
| العمود | النوع | مطلوب | القيمة الافتراضية |
|--------|------|-------|------------------|
| id | uuid | ✅ | gen_random_uuid() |
| name_ar | varchar | ✅ | - |
| name_en | varchar | ✅ | - |
| description_ar | text | ❌ | - |
| description_en | text | ❌ | - |
| category | varchar | ✅ | 'achievement' |
| icon | varchar | ✅ | 'trophy' |
| points_required | integer | ❌ | 0 |
| is_active | boolean | ❌ | true |
| created_at | timestamptz | ✅ | now() |

---

### 9. courses (الدورات)
| العمود | النوع | مطلوب | القيمة الافتراضية |
|--------|------|-------|------------------|
| id | uuid | ✅ | gen_random_uuid() |
| teacher_id | uuid | ✅ | - |
| title | text | ✅ | - |
| description | text | ❌ | - |
| subject | text | ✅ | - |
| grade_level | text | ❌ | - |
| price | numeric | ❌ | 0 |
| thumbnail_url | text | ❌ | - |
| is_active | boolean | ❌ | true |
| created_at | timestamptz | ❌ | now() |
| updated_at | timestamptz | ❌ | now() |

---

### 10. enrollments (التسجيلات)
| العمود | النوع | مطلوب | القيمة الافتراضية |
|--------|------|-------|------------------|
| id | uuid | ✅ | gen_random_uuid() |
| student_id | uuid | ✅ | - |
| course_id | uuid | ✅ | - |
| status | text | ❌ | 'active' |
| enrolled_at | timestamptz | ❌ | now() |
| completed_at | timestamptz | ❌ | - |

---

### 11. flashcards (البطاقات التعليمية)
| العمود | النوع | مطلوب | القيمة الافتراضية |
|--------|------|-------|------------------|
| id | uuid | ✅ | gen_random_uuid() |
| course_id | uuid | ❌ | - |
| lesson_id | uuid | ❌ | - |
| front_ar | text | ✅ | - |
| front_en | text | ❌ | - |
| back_ar | text | ✅ | - |
| back_en | text | ❌ | - |
| difficulty | varchar | ❌ | 'medium' |
| order_index | integer | ❌ | 0 |
| is_ai_generated | boolean | ❌ | false |
| is_active | boolean | ❌ | true |
| created_by | uuid | ❌ | - |
| created_at | timestamptz | ✅ | now() |

---

### 12. groups (المجموعات)
| العمود | النوع | مطلوب | القيمة الافتراضية |
|--------|------|-------|------------------|
| id | uuid | ✅ | gen_random_uuid() |
| teacher_id | uuid | ✅ | - |
| course_id | uuid | ❌ | - |
| name | text | ✅ | - |
| description | text | ❌ | - |
| avatar_url | text | ❌ | - |
| created_at | timestamptz | ❌ | now() |
| updated_at | timestamptz | ❌ | now() |

---

### 13. group_members (أعضاء المجموعات)
| العمود | النوع | مطلوب | القيمة الافتراضية |
|--------|------|-------|------------------|
| id | uuid | ✅ | gen_random_uuid() |
| group_id | uuid | ✅ | - |
| student_id | uuid | ✅ | - |
| joined_at | timestamptz | ❌ | now() |

---

### 14. group_messages (رسائل المجموعات)
| العمود | النوع | مطلوب | القيمة الافتراضية |
|--------|------|-------|------------------|
| id | uuid | ✅ | gen_random_uuid() |
| group_id | uuid | ✅ | - |
| sender_id | uuid | ✅ | - |
| sender_type | text | ✅ | - |
| content | text | ✅ | - |
| file_url | text | ❌ | - |
| file_name | text | ❌ | - |
| file_type | text | ❌ | - |
| reply_to_id | uuid | ❌ | - |
| created_at | timestamptz | ❌ | now() |

---

### 15. lessons (الدروس)
| العمود | النوع | مطلوب | القيمة الافتراضية |
|--------|------|-------|------------------|
| id | uuid | ✅ | gen_random_uuid() |
| course_id | uuid | ✅ | - |
| title | text | ✅ | - |
| description | text | ❌ | - |
| content | text | ❌ | - |
| video_url | text | ❌ | - |
| pdf_url | text | ❌ | - |
| pdf_name | text | ❌ | - |
| order_index | integer | ❌ | 0 |
| duration_minutes | integer | ❌ | - |
| is_published | boolean | ❌ | false |
| ai_summary | text | ❌ | - |
| ai_key_points | jsonb | ❌ | - |
| created_at | timestamptz | ❌ | now() |

---

### 16. lesson_progress (تقدم الدروس)
| العمود | النوع | مطلوب | القيمة الافتراضية |
|--------|------|-------|------------------|
| id | uuid | ✅ | gen_random_uuid() |
| student_id | uuid | ✅ | - |
| lesson_id | uuid | ✅ | - |
| course_id | uuid | ✅ | - |
| progress_percentage | integer | ❌ | 100 |
| completed_at | timestamptz | ✅ | now() |

---

### 17. notifications (الإشعارات)
| العمود | النوع | مطلوب | القيمة الافتراضية |
|--------|------|-------|------------------|
| id | uuid | ✅ | gen_random_uuid() |
| user_id | uuid | ✅ | - |
| title | text | ✅ | - |
| message | text | ✅ | - |
| type | text | ✅ | 'general' |
| link | text | ❌ | - |
| meeting_id | uuid | ❌ | - |
| is_read | boolean | ✅ | false |
| created_at | timestamptz | ✅ | now() |

---

### 18. parents (أولياء الأمور)
| العمود | النوع | مطلوب | القيمة الافتراضية |
|--------|------|-------|------------------|
| id | uuid | ✅ | gen_random_uuid() |
| user_id | uuid | ✅ | - |
| occupation | text | ❌ | - |
| created_at | timestamptz | ❌ | now() |

---

### 19. parent_students (علاقة الآباء والطلاب)
| العمود | النوع | مطلوب | القيمة الافتراضية |
|--------|------|-------|------------------|
| id | uuid | ✅ | gen_random_uuid() |
| parent_id | uuid | ✅ | - |
| student_id | uuid | ✅ | - |
| relationship | text | ❌ | - |
| created_at | timestamptz | ❌ | now() |

---

### 20. profiles (الملفات الشخصية)
| العمود | النوع | مطلوب | القيمة الافتراضية |
|--------|------|-------|------------------|
| id | uuid | ✅ | - |
| full_name | text | ✅ | - |
| email | text | ❌ | - |
| phone | text | ❌ | - |
| whatsapp_number | text | ❌ | - |
| avatar_url | text | ❌ | - |
| created_at | timestamptz | ❌ | now() |
| updated_at | timestamptz | ❌ | now() |

---

### 21. quizzes (الاختبارات)
| العمود | النوع | مطلوب | القيمة الافتراضية |
|--------|------|-------|------------------|
| id | uuid | ✅ | gen_random_uuid() |
| teacher_id | uuid | ✅ | - |
| course_id | uuid | ✅ | - |
| lesson_id | uuid | ❌ | - |
| title | text | ✅ | - |
| description | text | ❌ | - |
| questions | jsonb | ✅ | '[]' |
| time_limit_minutes | integer | ❌ | - |
| is_published | boolean | ✅ | false |
| created_at | timestamptz | ✅ | now() |
| updated_at | timestamptz | ✅ | now() |

---

### 22. quiz_attempts (محاولات الاختبارات)
| العمود | النوع | مطلوب | القيمة الافتراضية |
|--------|------|-------|------------------|
| id | uuid | ✅ | gen_random_uuid() |
| quiz_id | uuid | ✅ | - |
| student_id | uuid | ✅ | - |
| answers | jsonb | ✅ | '[]' |
| score | numeric | ❌ | - |
| correct_answers | integer | ❌ | - |
| total_questions | integer | ✅ | - |
| started_at | timestamptz | ✅ | now() |
| completed_at | timestamptz | ❌ | - |

---

### 23. students (الطلاب)
| العمود | النوع | مطلوب | القيمة الافتراضية |
|--------|------|-------|------------------|
| id | uuid | ✅ | gen_random_uuid() |
| user_id | uuid | ✅ | - |
| grade_level | text | ❌ | - |
| school_name | text | ❌ | - |
| total_points | integer | ❌ | 0 |
| current_level | integer | ❌ | 1 |
| created_at | timestamptz | ❌ | now() |

---

### 24. teachers (المعلمين)
| العمود | النوع | مطلوب | القيمة الافتراضية |
|--------|------|-------|------------------|
| id | uuid | ✅ | gen_random_uuid() |
| user_id | uuid | ✅ | - |
| bio | text | ❌ | - |
| specialization | text | ❌ | - |
| experience_years | integer | ❌ | 0 |
| education | text | ❌ | - |
| is_verified | boolean | ❌ | false |
| rating | numeric | ❌ | 0 |
| total_reviews | integer | ❌ | 0 |
| created_at | timestamptz | ❌ | now() |

---

### 25. user_roles (أدوار المستخدمين)
| العمود | النوع | مطلوب | القيمة الافتراضية |
|--------|------|-------|------------------|
| id | uuid | ✅ | gen_random_uuid() |
| user_id | uuid | ✅ | - |
| role | app_role | ✅ | - |
| created_at | timestamptz | ❌ | now() |

---

### 26. zoom_meetings (اجتماعات زوم)
| العمود | النوع | مطلوب | القيمة الافتراضية |
|--------|------|-------|------------------|
| id | uuid | ✅ | gen_random_uuid() |
| teacher_id | uuid | ✅ | - |
| course_id | uuid | ❌ | - |
| title | text | ✅ | - |
| description | text | ❌ | - |
| meeting_url | text | ❌ | - |
| meeting_id | text | ❌ | - |
| scheduled_at | timestamptz | ❌ | - |
| duration_minutes | integer | ❌ | 60 |
| status | text | ❌ | 'scheduled' |
| is_recurring | boolean | ❌ | false |
| created_at | timestamptz | ❌ | now() |

---

## 🔐 الأدوار المتاحة (app_role)

| الدور | الوصف |
|------|-------|
| student | طالب |
| teacher | معلم |
| parent | ولي أمر |
| admin | مدير النظام |

---

## 🔗 العلاقات الرئيسية

```
profiles ─────┬──────► students ──────► enrollments ◄────── courses
              │                              │                  │
              ├──────► teachers ─────────────┴──────────────────┤
              │                                                 │
              └──────► parents ──────► parent_students ◄────────┘
                                              │
                                              ▼
                                          students
```

---

## 📊 ملخص الإحصائيات

- **إجمالي الجداول**: 86
- **جداول المستخدمين**: profiles, students, teachers, parents, user_roles
- **جداول المحتوى التعليمي**: courses, lessons, quizzes, flashcards
- **جداول التفاعل**: enrollments, lesson_progress, quiz_attempts
- **جداول التواصل**: messages, group_messages, notifications
- **جداول الذكاء الاصطناعي**: ai_conversations, ai_messages, ai_summaries
- **جداول الأمان**: auth_rate_limits, blocked_ips, security_threats

---

*تم إنشاء هذا الملف تلقائياً - آخر تحديث: 2025-12-25*
