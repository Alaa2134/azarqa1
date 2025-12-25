export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      achievements: {
        Row: {
          created_at: string
          description_ar: string | null
          description_en: string | null
          icon: string | null
          id: string
          is_active: boolean | null
          name_ar: string
          name_en: string
          points_reward: number | null
          target_value: number | null
          type: string
        }
        Insert: {
          created_at?: string
          description_ar?: string | null
          description_en?: string | null
          icon?: string | null
          id?: string
          is_active?: boolean | null
          name_ar: string
          name_en: string
          points_reward?: number | null
          target_value?: number | null
          type?: string
        }
        Update: {
          created_at?: string
          description_ar?: string | null
          description_en?: string | null
          icon?: string | null
          id?: string
          is_active?: boolean | null
          name_ar?: string
          name_en?: string
          points_reward?: number | null
          target_value?: number | null
          type?: string
        }
        Relationships: []
      }
      activity_logs: {
        Row: {
          activity_data: Json | null
          activity_type: string
          course_id: string | null
          created_at: string
          id: string
          lesson_id: string | null
          points_earned: number | null
          user_id: string
          user_type: string
        }
        Insert: {
          activity_data?: Json | null
          activity_type: string
          course_id?: string | null
          created_at?: string
          id?: string
          lesson_id?: string | null
          points_earned?: number | null
          user_id: string
          user_type: string
        }
        Update: {
          activity_data?: Json | null
          activity_type?: string
          course_id?: string | null
          created_at?: string
          id?: string
          lesson_id?: string | null
          points_earned?: number | null
          user_id?: string
          user_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "activity_logs_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "activity_logs_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
        ]
      }
      adaptive_learning_paths: {
        Row: {
          created_at: string
          description: string | null
          id: string
          is_active: boolean | null
          name: string
          settings: Json | null
          target_level: string | null
          teacher_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          settings?: Json | null
          target_level?: string | null
          teacher_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          settings?: Json | null
          target_level?: string | null
          teacher_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "adaptive_learning_paths_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "public_teachers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "adaptive_learning_paths_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "teachers"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_conversations: {
        Row: {
          context_type: string
          course_id: string | null
          created_at: string | null
          id: string
          lesson_id: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          context_type?: string
          course_id?: string | null
          created_at?: string | null
          id?: string
          lesson_id?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          context_type?: string
          course_id?: string | null
          created_at?: string | null
          id?: string
          lesson_id?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ai_conversations_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ai_conversations_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_development_history: {
        Row: {
          action: string
          created_at: string
          details: string | null
          id: string
          performed_at: string
          status: string
        }
        Insert: {
          action: string
          created_at?: string
          details?: string | null
          id?: string
          performed_at?: string
          status?: string
        }
        Update: {
          action?: string
          created_at?: string
          details?: string | null
          id?: string
          performed_at?: string
          status?: string
        }
        Relationships: []
      }
      ai_development_improvements: {
        Row: {
          created_at: string
          description: string | null
          effort: string
          id: string
          impact: string
          implemented_at: string | null
          priority: string
          status: string
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          effort?: string
          id?: string
          impact?: string
          implemented_at?: string | null
          priority?: string
          status?: string
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          effort?: string
          id?: string
          impact?: string
          implemented_at?: string | null
          priority?: string
          status?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      ai_development_issues: {
        Row: {
          created_at: string
          description: string | null
          detected_at: string
          id: string
          location: string | null
          resolved_at: string | null
          severity: string
          status: string
          suggested_fix: string | null
          title: string
          type: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          detected_at?: string
          id?: string
          location?: string | null
          resolved_at?: string | null
          severity?: string
          status?: string
          suggested_fix?: string | null
          title: string
          type?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          detected_at?: string
          id?: string
          location?: string | null
          resolved_at?: string | null
          severity?: string
          status?: string
          suggested_fix?: string | null
          title?: string
          type?: string
          updated_at?: string
        }
        Relationships: []
      }
      ai_development_metrics: {
        Row: {
          color: string | null
          created_at: string
          icon: string | null
          id: string
          name: string
          recorded_at: string
          trend: string | null
          trend_value: number | null
          unit: string | null
          value: number
        }
        Insert: {
          color?: string | null
          created_at?: string
          icon?: string | null
          id?: string
          name: string
          recorded_at?: string
          trend?: string | null
          trend_value?: number | null
          unit?: string | null
          value?: number
        }
        Update: {
          color?: string | null
          created_at?: string
          icon?: string | null
          id?: string
          name?: string
          recorded_at?: string
          trend?: string | null
          trend_value?: number | null
          unit?: string | null
          value?: number
        }
        Relationships: []
      }
      ai_messages: {
        Row: {
          content: string
          conversation_id: string | null
          created_at: string | null
          id: string
          role: string
        }
        Insert: {
          content: string
          conversation_id?: string | null
          created_at?: string | null
          id?: string
          role: string
        }
        Update: {
          content?: string
          conversation_id?: string | null
          created_at?: string | null
          id?: string
          role?: string
        }
        Relationships: [
          {
            foreignKeyName: "ai_messages_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "ai_conversations"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_summaries: {
        Row: {
          content_ar: string | null
          content_en: string | null
          course_id: string | null
          generated_at: string
          id: string
          is_approved: boolean | null
          key_points: Json | null
          lesson_id: string | null
          summary_type: string
        }
        Insert: {
          content_ar?: string | null
          content_en?: string | null
          course_id?: string | null
          generated_at?: string
          id?: string
          is_approved?: boolean | null
          key_points?: Json | null
          lesson_id?: string | null
          summary_type?: string
        }
        Update: {
          content_ar?: string | null
          content_en?: string | null
          course_id?: string | null
          generated_at?: string
          id?: string
          is_approved?: boolean | null
          key_points?: Json | null
          lesson_id?: string | null
          summary_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "ai_summaries_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ai_summaries_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
        ]
      }
      announcements: {
        Row: {
          author_id: string
          content: string
          created_at: string | null
          id: string
          is_pinned: boolean | null
          target_role: Database["public"]["Enums"]["app_role"] | null
          title: string
        }
        Insert: {
          author_id: string
          content: string
          created_at?: string | null
          id?: string
          is_pinned?: boolean | null
          target_role?: Database["public"]["Enums"]["app_role"] | null
          title: string
        }
        Update: {
          author_id?: string
          content?: string
          created_at?: string | null
          id?: string
          is_pinned?: boolean | null
          target_role?: Database["public"]["Enums"]["app_role"] | null
          title?: string
        }
        Relationships: []
      }
      app_settings: {
        Row: {
          category: string
          created_at: string
          description: string | null
          id: string
          key: string
          updated_at: string
          value: Json
        }
        Insert: {
          category?: string
          created_at?: string
          description?: string | null
          id?: string
          key: string
          updated_at?: string
          value?: Json
        }
        Update: {
          category?: string
          created_at?: string
          description?: string | null
          id?: string
          key?: string
          updated_at?: string
          value?: Json
        }
        Relationships: []
      }
      assessments: {
        Row: {
          assessed_at: string | null
          course_id: string
          feedback: string | null
          id: string
          lesson_id: string | null
          max_score: number | null
          score: number | null
          student_id: string
          title: string
        }
        Insert: {
          assessed_at?: string | null
          course_id: string
          feedback?: string | null
          id?: string
          lesson_id?: string | null
          max_score?: number | null
          score?: number | null
          student_id: string
          title: string
        }
        Update: {
          assessed_at?: string | null
          course_id?: string
          feedback?: string | null
          id?: string
          lesson_id?: string | null
          max_score?: number | null
          score?: number | null
          student_id?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "assessments_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assessments_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assessments_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      auth_rate_limits: {
        Row: {
          attempt_count: number | null
          blocked_until: string | null
          email: string | null
          first_attempt_at: string | null
          id: string
          ip_address: string
          last_attempt_at: string | null
        }
        Insert: {
          attempt_count?: number | null
          blocked_until?: string | null
          email?: string | null
          first_attempt_at?: string | null
          id?: string
          ip_address: string
          last_attempt_at?: string | null
        }
        Update: {
          attempt_count?: number | null
          blocked_until?: string | null
          email?: string | null
          first_attempt_at?: string | null
          id?: string
          ip_address?: string
          last_attempt_at?: string | null
        }
        Relationships: []
      }
      backups_log: {
        Row: {
          backup_type: string
          completed_at: string | null
          created_at: string
          created_by: string | null
          duration_seconds: number | null
          error_message: string | null
          file_url: string | null
          id: string
          name: string
          size_bytes: number | null
          status: string
        }
        Insert: {
          backup_type?: string
          completed_at?: string | null
          created_at?: string
          created_by?: string | null
          duration_seconds?: number | null
          error_message?: string | null
          file_url?: string | null
          id?: string
          name: string
          size_bytes?: number | null
          status?: string
        }
        Update: {
          backup_type?: string
          completed_at?: string | null
          created_at?: string
          created_by?: string | null
          duration_seconds?: number | null
          error_message?: string | null
          file_url?: string | null
          id?: string
          name?: string
          size_bytes?: number | null
          status?: string
        }
        Relationships: []
      }
      badges: {
        Row: {
          category: string
          created_at: string
          description_ar: string | null
          description_en: string | null
          icon: string
          id: string
          is_active: boolean | null
          name_ar: string
          name_en: string
          points_required: number | null
        }
        Insert: {
          category?: string
          created_at?: string
          description_ar?: string | null
          description_en?: string | null
          icon?: string
          id?: string
          is_active?: boolean | null
          name_ar: string
          name_en: string
          points_required?: number | null
        }
        Update: {
          category?: string
          created_at?: string
          description_ar?: string | null
          description_en?: string | null
          icon?: string
          id?: string
          is_active?: boolean | null
          name_ar?: string
          name_en?: string
          points_required?: number | null
        }
        Relationships: []
      }
      blocked_ips: {
        Row: {
          attempts: number
          blocked_by: string | null
          created_at: string
          expires_at: string | null
          id: string
          ip_address: string
          is_active: boolean
          reason: string
        }
        Insert: {
          attempts?: number
          blocked_by?: string | null
          created_at?: string
          expires_at?: string | null
          id?: string
          ip_address: string
          is_active?: boolean
          reason: string
        }
        Update: {
          attempts?: number
          blocked_by?: string | null
          created_at?: string
          expires_at?: string | null
          id?: string
          ip_address?: string
          is_active?: boolean
          reason?: string
        }
        Relationships: []
      }
      cheating_reports: {
        Row: {
          action_taken: string | null
          created_at: string
          details: string | null
          detected_at: string
          detection_type: string
          id: string
          is_reviewed: boolean
          quiz_id: string
          reviewed_at: string | null
          severity: string
          student_id: string
          teacher_id: string
        }
        Insert: {
          action_taken?: string | null
          created_at?: string
          details?: string | null
          detected_at?: string
          detection_type: string
          id?: string
          is_reviewed?: boolean
          quiz_id: string
          reviewed_at?: string | null
          severity?: string
          student_id: string
          teacher_id: string
        }
        Update: {
          action_taken?: string | null
          created_at?: string
          details?: string | null
          detected_at?: string
          detection_type?: string
          id?: string
          is_reviewed?: boolean
          quiz_id?: string
          reviewed_at?: string | null
          severity?: string
          student_id?: string
          teacher_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "cheating_reports_quiz_id_fkey"
            columns: ["quiz_id"]
            isOneToOne: false
            referencedRelation: "quizzes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cheating_reports_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cheating_reports_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "public_teachers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cheating_reports_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "teachers"
            referencedColumns: ["id"]
          },
        ]
      }
      courses: {
        Row: {
          created_at: string | null
          description: string | null
          grade_level: string | null
          id: string
          is_active: boolean | null
          price: number | null
          subject: string
          teacher_id: string
          thumbnail_url: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          grade_level?: string | null
          id?: string
          is_active?: boolean | null
          price?: number | null
          subject: string
          teacher_id: string
          thumbnail_url?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          grade_level?: string | null
          id?: string
          is_active?: boolean | null
          price?: number | null
          subject?: string
          teacher_id?: string
          thumbnail_url?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "courses_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "public_teachers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "courses_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "teachers"
            referencedColumns: ["id"]
          },
        ]
      }
      design_elements: {
        Row: {
          created_at: string
          element_name: string
          element_name_ar: string
          element_type: string
          id: string
          preview_content: string | null
          styles: Json
          template_id: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          element_name: string
          element_name_ar: string
          element_type: string
          id?: string
          preview_content?: string | null
          styles?: Json
          template_id?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          element_name?: string
          element_name_ar?: string
          element_type?: string
          id?: string
          preview_content?: string | null
          styles?: Json
          template_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "design_elements_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "site_templates"
            referencedColumns: ["id"]
          },
        ]
      }
      email_templates: {
        Row: {
          body_ar: string
          body_en: string
          created_at: string
          id: string
          is_active: boolean | null
          name_ar: string
          name_en: string
          subject_ar: string
          subject_en: string
          template_key: string
          updated_at: string
          variables: Json | null
        }
        Insert: {
          body_ar: string
          body_en: string
          created_at?: string
          id?: string
          is_active?: boolean | null
          name_ar: string
          name_en: string
          subject_ar: string
          subject_en: string
          template_key: string
          updated_at?: string
          variables?: Json | null
        }
        Update: {
          body_ar?: string
          body_en?: string
          created_at?: string
          id?: string
          is_active?: boolean | null
          name_ar?: string
          name_en?: string
          subject_ar?: string
          subject_en?: string
          template_key?: string
          updated_at?: string
          variables?: Json | null
        }
        Relationships: []
      }
      enrollment_codes: {
        Row: {
          code: string
          code_type: string
          course_id: string | null
          created_at: string
          current_uses: number | null
          discount_percentage: number | null
          expires_at: string | null
          id: string
          is_active: boolean | null
          max_uses: number | null
          teacher_id: string
          updated_at: string
        }
        Insert: {
          code: string
          code_type?: string
          course_id?: string | null
          created_at?: string
          current_uses?: number | null
          discount_percentage?: number | null
          expires_at?: string | null
          id?: string
          is_active?: boolean | null
          max_uses?: number | null
          teacher_id: string
          updated_at?: string
        }
        Update: {
          code?: string
          code_type?: string
          course_id?: string | null
          created_at?: string
          current_uses?: number | null
          discount_percentage?: number | null
          expires_at?: string | null
          id?: string
          is_active?: boolean | null
          max_uses?: number | null
          teacher_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "enrollment_codes_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "enrollment_codes_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "public_teachers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "enrollment_codes_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "teachers"
            referencedColumns: ["id"]
          },
        ]
      }
      enrollments: {
        Row: {
          completed_at: string | null
          course_id: string
          enrolled_at: string | null
          id: string
          status: string | null
          student_id: string
        }
        Insert: {
          completed_at?: string | null
          course_id: string
          enrolled_at?: string | null
          id?: string
          status?: string | null
          student_id: string
        }
        Update: {
          completed_at?: string | null
          course_id?: string
          enrolled_at?: string | null
          id?: string
          status?: string | null
          student_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "enrollments_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "enrollments_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      feature_flags: {
        Row: {
          category: string
          config: Json
          created_at: string
          description: string
          enabled: boolean
          enabled_for_roles: string[]
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          category: string
          config?: Json
          created_at?: string
          description: string
          enabled?: boolean
          enabled_for_roles?: string[]
          id: string
          name: string
          updated_at?: string
        }
        Update: {
          category?: string
          config?: Json
          created_at?: string
          description?: string
          enabled?: boolean
          enabled_for_roles?: string[]
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      flashcards: {
        Row: {
          back_ar: string
          back_en: string | null
          course_id: string | null
          created_at: string
          created_by: string | null
          difficulty: string | null
          front_ar: string
          front_en: string | null
          id: string
          is_active: boolean | null
          is_ai_generated: boolean | null
          lesson_id: string | null
          order_index: number | null
        }
        Insert: {
          back_ar: string
          back_en?: string | null
          course_id?: string | null
          created_at?: string
          created_by?: string | null
          difficulty?: string | null
          front_ar: string
          front_en?: string | null
          id?: string
          is_active?: boolean | null
          is_ai_generated?: boolean | null
          lesson_id?: string | null
          order_index?: number | null
        }
        Update: {
          back_ar?: string
          back_en?: string | null
          course_id?: string | null
          created_at?: string
          created_by?: string | null
          difficulty?: string | null
          front_ar?: string
          front_en?: string | null
          id?: string
          is_active?: boolean | null
          is_ai_generated?: boolean | null
          lesson_id?: string | null
          order_index?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "flashcards_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "flashcards_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
        ]
      }
      group_members: {
        Row: {
          group_id: string
          id: string
          joined_at: string | null
          student_id: string
        }
        Insert: {
          group_id: string
          id?: string
          joined_at?: string | null
          student_id: string
        }
        Update: {
          group_id?: string
          id?: string
          joined_at?: string | null
          student_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "group_members_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "group_members_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      group_messages: {
        Row: {
          content: string
          created_at: string | null
          file_name: string | null
          file_type: string | null
          file_url: string | null
          group_id: string
          id: string
          reply_to_id: string | null
          sender_id: string
          sender_type: string
        }
        Insert: {
          content: string
          created_at?: string | null
          file_name?: string | null
          file_type?: string | null
          file_url?: string | null
          group_id: string
          id?: string
          reply_to_id?: string | null
          sender_id: string
          sender_type: string
        }
        Update: {
          content?: string
          created_at?: string | null
          file_name?: string | null
          file_type?: string | null
          file_url?: string | null
          group_id?: string
          id?: string
          reply_to_id?: string | null
          sender_id?: string
          sender_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "group_messages_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "group_messages_reply_to_id_fkey"
            columns: ["reply_to_id"]
            isOneToOne: false
            referencedRelation: "group_messages"
            referencedColumns: ["id"]
          },
        ]
      }
      groups: {
        Row: {
          avatar_url: string | null
          course_id: string | null
          created_at: string | null
          description: string | null
          id: string
          name: string
          teacher_id: string
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          course_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          teacher_id: string
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          course_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          teacher_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "groups_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "groups_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "public_teachers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "groups_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "teachers"
            referencedColumns: ["id"]
          },
        ]
      }
      leaderboard_cache: {
        Row: {
          badges_count: number | null
          current_level: number | null
          id: string
          period: string | null
          rank: number | null
          student_id: string
          student_name: string | null
          total_points: number | null
          updated_at: string
        }
        Insert: {
          badges_count?: number | null
          current_level?: number | null
          id?: string
          period?: string | null
          rank?: number | null
          student_id: string
          student_name?: string | null
          total_points?: number | null
          updated_at?: string
        }
        Update: {
          badges_count?: number | null
          current_level?: number | null
          id?: string
          period?: string | null
          rank?: number | null
          student_id?: string
          student_name?: string | null
          total_points?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "leaderboard_cache_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      lesson_materials: {
        Row: {
          ai_extracted_text: string | null
          created_at: string | null
          file_name: string
          file_size: number | null
          file_type: string
          file_url: string
          id: string
          lesson_id: string | null
          updated_at: string | null
        }
        Insert: {
          ai_extracted_text?: string | null
          created_at?: string | null
          file_name: string
          file_size?: number | null
          file_type?: string
          file_url: string
          id?: string
          lesson_id?: string | null
          updated_at?: string | null
        }
        Update: {
          ai_extracted_text?: string | null
          created_at?: string | null
          file_name?: string
          file_size?: number | null
          file_type?: string
          file_url?: string
          id?: string
          lesson_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lesson_materials_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
        ]
      }
      lesson_progress: {
        Row: {
          completed_at: string
          course_id: string
          id: string
          lesson_id: string
          progress_percentage: number | null
          student_id: string
        }
        Insert: {
          completed_at?: string
          course_id: string
          id?: string
          lesson_id: string
          progress_percentage?: number | null
          student_id: string
        }
        Update: {
          completed_at?: string
          course_id?: string
          id?: string
          lesson_id?: string
          progress_percentage?: number | null
          student_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "lesson_progress_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lesson_progress_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lesson_progress_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      lessons: {
        Row: {
          ai_key_points: Json | null
          ai_summary: string | null
          content: string | null
          course_id: string
          created_at: string | null
          description: string | null
          duration_minutes: number | null
          id: string
          is_published: boolean | null
          order_index: number | null
          pdf_name: string | null
          pdf_url: string | null
          title: string
          video_url: string | null
        }
        Insert: {
          ai_key_points?: Json | null
          ai_summary?: string | null
          content?: string | null
          course_id: string
          created_at?: string | null
          description?: string | null
          duration_minutes?: number | null
          id?: string
          is_published?: boolean | null
          order_index?: number | null
          pdf_name?: string | null
          pdf_url?: string | null
          title: string
          video_url?: string | null
        }
        Update: {
          ai_key_points?: Json | null
          ai_summary?: string | null
          content?: string | null
          course_id?: string
          created_at?: string | null
          description?: string | null
          duration_minutes?: number | null
          id?: string
          is_published?: boolean | null
          order_index?: number | null
          pdf_name?: string | null
          pdf_url?: string | null
          title?: string
          video_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lessons_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      meeting_recordings: {
        Row: {
          created_at: string
          duration_seconds: number | null
          file_name: string
          file_size: number | null
          file_url: string
          id: string
          meeting_id: string
          teacher_id: string
        }
        Insert: {
          created_at?: string
          duration_seconds?: number | null
          file_name: string
          file_size?: number | null
          file_url: string
          id?: string
          meeting_id: string
          teacher_id: string
        }
        Update: {
          created_at?: string
          duration_seconds?: number | null
          file_name?: string
          file_size?: number | null
          file_url?: string
          id?: string
          meeting_id?: string
          teacher_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "meeting_recordings_meeting_id_fkey"
            columns: ["meeting_id"]
            isOneToOne: false
            referencedRelation: "student_zoom_meetings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "meeting_recordings_meeting_id_fkey"
            columns: ["meeting_id"]
            isOneToOne: false
            referencedRelation: "zoom_meetings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "meeting_recordings_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "public_teachers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "meeting_recordings_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "teachers"
            referencedColumns: ["id"]
          },
        ]
      }
      message_reactions: {
        Row: {
          created_at: string
          id: string
          message_id: string
          reaction: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          message_id: string
          reaction: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          message_id?: string
          reaction?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "message_reactions_message_id_fkey"
            columns: ["message_id"]
            isOneToOne: false
            referencedRelation: "group_messages"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          content: string
          created_at: string | null
          id: string
          is_read: boolean | null
          receiver_id: string
          sender_id: string
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          receiver_id: string
          sender_id: string
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          receiver_id?: string
          sender_id?: string
        }
        Relationships: []
      }
      notification_preferences: {
        Row: {
          created_at: string
          email_enabled: boolean | null
          id: string
          in_app_enabled: boolean | null
          notification_type: string
          push_enabled: boolean | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          email_enabled?: boolean | null
          id?: string
          in_app_enabled?: boolean | null
          notification_type: string
          push_enabled?: boolean | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          email_enabled?: boolean | null
          id?: string
          in_app_enabled?: boolean | null
          notification_type?: string
          push_enabled?: boolean | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      notifications: {
        Row: {
          created_at: string
          id: string
          is_read: boolean
          link: string | null
          meeting_id: string | null
          message: string
          title: string
          type: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_read?: boolean
          link?: string | null
          meeting_id?: string | null
          message: string
          title: string
          type?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          is_read?: boolean
          link?: string | null
          meeting_id?: string | null
          message?: string
          title?: string
          type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notifications_meeting_id_fkey"
            columns: ["meeting_id"]
            isOneToOne: false
            referencedRelation: "student_zoom_meetings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_meeting_id_fkey"
            columns: ["meeting_id"]
            isOneToOne: false
            referencedRelation: "zoom_meetings"
            referencedColumns: ["id"]
          },
        ]
      }
      parent_students: {
        Row: {
          created_at: string | null
          id: string
          parent_id: string
          relationship: string | null
          student_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          parent_id: string
          relationship?: string | null
          student_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          parent_id?: string
          relationship?: string | null
          student_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "parent_students_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "parents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "parent_students_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      parent_teacher_messages: {
        Row: {
          content: string
          created_at: string
          id: string
          is_read: boolean | null
          parent_deleted: boolean | null
          parent_id: string
          read_at: string | null
          sender_type: string
          student_id: string
          subject: string | null
          teacher_deleted: boolean | null
          teacher_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          is_read?: boolean | null
          parent_deleted?: boolean | null
          parent_id: string
          read_at?: string | null
          sender_type: string
          student_id: string
          subject?: string | null
          teacher_deleted?: boolean | null
          teacher_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          is_read?: boolean | null
          parent_deleted?: boolean | null
          parent_id?: string
          read_at?: string | null
          sender_type?: string
          student_id?: string
          subject?: string | null
          teacher_deleted?: boolean | null
          teacher_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "parent_teacher_messages_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "parents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "parent_teacher_messages_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "parent_teacher_messages_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "public_teachers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "parent_teacher_messages_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "teachers"
            referencedColumns: ["id"]
          },
        ]
      }
      parent_whatsapp_messages: {
        Row: {
          content: string
          created_at: string
          error_message: string | null
          id: string
          message_type: string
          parent_id: string
          sent_at: string | null
          status: string
          student_id: string
          teacher_id: string
        }
        Insert: {
          content: string
          created_at?: string
          error_message?: string | null
          id?: string
          message_type: string
          parent_id: string
          sent_at?: string | null
          status?: string
          student_id: string
          teacher_id: string
        }
        Update: {
          content?: string
          created_at?: string
          error_message?: string | null
          id?: string
          message_type?: string
          parent_id?: string
          sent_at?: string | null
          status?: string
          student_id?: string
          teacher_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "parent_whatsapp_messages_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "parents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "parent_whatsapp_messages_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "parent_whatsapp_messages_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "public_teachers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "parent_whatsapp_messages_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "teachers"
            referencedColumns: ["id"]
          },
        ]
      }
      parents: {
        Row: {
          created_at: string | null
          id: string
          occupation: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          occupation?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          occupation?: string | null
          user_id?: string
        }
        Relationships: []
      }
      payment_confirmations: {
        Row: {
          amount: number
          confirmed_at: string | null
          course_id: string
          created_at: string | null
          id: string
          payment_method: string
          payment_reference: string | null
          status: string
          student_id: string
          student_notes: string | null
          teacher_notes: string | null
          updated_at: string | null
        }
        Insert: {
          amount: number
          confirmed_at?: string | null
          course_id: string
          created_at?: string | null
          id?: string
          payment_method: string
          payment_reference?: string | null
          status?: string
          student_id: string
          student_notes?: string | null
          teacher_notes?: string | null
          updated_at?: string | null
        }
        Update: {
          amount?: number
          confirmed_at?: string | null
          course_id?: string
          created_at?: string | null
          id?: string
          payment_method?: string
          payment_reference?: string | null
          status?: string
          student_id?: string
          student_notes?: string | null
          teacher_notes?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payment_confirmations_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payment_confirmations_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      payment_gateways: {
        Row: {
          config: Json | null
          created_at: string
          gateway_name: string
          gateway_type: string
          id: string
          instructions: string | null
          is_enabled: boolean | null
          teacher_id: string | null
          updated_at: string
        }
        Insert: {
          config?: Json | null
          created_at?: string
          gateway_name: string
          gateway_type: string
          id?: string
          instructions?: string | null
          is_enabled?: boolean | null
          teacher_id?: string | null
          updated_at?: string
        }
        Update: {
          config?: Json | null
          created_at?: string
          gateway_name?: string
          gateway_type?: string
          id?: string
          instructions?: string | null
          is_enabled?: boolean | null
          teacher_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "payment_gateways_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "public_teachers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payment_gateways_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "teachers"
            referencedColumns: ["id"]
          },
        ]
      }
      performance_reports: {
        Row: {
          achievements_unlocked: number | null
          average_quiz_score: number | null
          created_at: string
          id: string
          lessons_completed: number | null
          period_end: string
          period_start: string
          points_earned: number | null
          quizzes_taken: number | null
          report_data: Json | null
          report_type: string
          student_id: string
          total_time_spent: number | null
        }
        Insert: {
          achievements_unlocked?: number | null
          average_quiz_score?: number | null
          created_at?: string
          id?: string
          lessons_completed?: number | null
          period_end: string
          period_start: string
          points_earned?: number | null
          quizzes_taken?: number | null
          report_data?: Json | null
          report_type?: string
          student_id: string
          total_time_spent?: number | null
        }
        Update: {
          achievements_unlocked?: number | null
          average_quiz_score?: number | null
          created_at?: string
          id?: string
          lessons_completed?: number | null
          period_end?: string
          period_start?: string
          points_earned?: number | null
          quizzes_taken?: number | null
          report_data?: Json | null
          report_type?: string
          student_id?: string
          total_time_spent?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "performance_reports_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      pro_plans: {
        Row: {
          created_at: string
          description_ar: string | null
          description_en: string | null
          features: Json
          features_locked_for_free: Json
          id: string
          is_active: boolean
          name_ar: string
          name_en: string
          plan_type: string
          price: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          description_ar?: string | null
          description_en?: string | null
          features?: Json
          features_locked_for_free?: Json
          id?: string
          is_active?: boolean
          name_ar: string
          name_en: string
          plan_type: string
          price?: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          description_ar?: string | null
          description_en?: string | null
          features?: Json
          features_locked_for_free?: Json
          id?: string
          is_active?: boolean
          name_ar?: string
          name_en?: string
          plan_type?: string
          price?: number
          updated_at?: string
        }
        Relationships: []
      }
      pro_subscriptions: {
        Row: {
          amount_paid: number | null
          auto_renew: boolean | null
          created_at: string
          end_date: string | null
          features: Json | null
          granted_by: string | null
          id: string
          notes: string | null
          payment_method: string | null
          plan_type: string
          start_date: string
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          amount_paid?: number | null
          auto_renew?: boolean | null
          created_at?: string
          end_date?: string | null
          features?: Json | null
          granted_by?: string | null
          id?: string
          notes?: string | null
          payment_method?: string | null
          plan_type?: string
          start_date?: string
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          amount_paid?: number | null
          auto_renew?: boolean | null
          created_at?: string
          end_date?: string | null
          features?: Json | null
          granted_by?: string | null
          id?: string
          notes?: string | null
          payment_method?: string | null
          plan_type?: string
          start_date?: string
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          email: string | null
          full_name: string
          id: string
          phone: string | null
          updated_at: string | null
          whatsapp_number: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          full_name: string
          id: string
          phone?: string | null
          updated_at?: string | null
          whatsapp_number?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          full_name?: string
          id?: string
          phone?: string | null
          updated_at?: string | null
          whatsapp_number?: string | null
        }
        Relationships: []
      }
      quiz_attempts: {
        Row: {
          answers: Json
          completed_at: string | null
          correct_answers: number | null
          id: string
          quiz_id: string
          score: number | null
          started_at: string
          student_id: string
          total_questions: number
        }
        Insert: {
          answers?: Json
          completed_at?: string | null
          correct_answers?: number | null
          id?: string
          quiz_id: string
          score?: number | null
          started_at?: string
          student_id: string
          total_questions: number
        }
        Update: {
          answers?: Json
          completed_at?: string | null
          correct_answers?: number | null
          id?: string
          quiz_id?: string
          score?: number | null
          started_at?: string
          student_id?: string
          total_questions?: number
        }
        Relationships: [
          {
            foreignKeyName: "quiz_attempts_quiz_id_fkey"
            columns: ["quiz_id"]
            isOneToOne: false
            referencedRelation: "quizzes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "quiz_attempts_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      quizzes: {
        Row: {
          course_id: string
          created_at: string
          description: string | null
          id: string
          is_published: boolean
          lesson_id: string | null
          questions: Json
          teacher_id: string
          time_limit_minutes: number | null
          title: string
          updated_at: string
        }
        Insert: {
          course_id: string
          created_at?: string
          description?: string | null
          id?: string
          is_published?: boolean
          lesson_id?: string | null
          questions?: Json
          teacher_id: string
          time_limit_minutes?: number | null
          title: string
          updated_at?: string
        }
        Update: {
          course_id?: string
          created_at?: string
          description?: string | null
          id?: string
          is_published?: boolean
          lesson_id?: string | null
          questions?: Json
          teacher_id?: string
          time_limit_minutes?: number | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "quizzes_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "quizzes_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "quizzes_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "public_teachers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "quizzes_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "teachers"
            referencedColumns: ["id"]
          },
        ]
      }
      scheduled_announcements: {
        Row: {
          author_id: string
          content_ar: string
          content_en: string | null
          created_at: string
          id: string
          priority: string | null
          published_at: string | null
          scheduled_at: string
          status: string | null
          target_course_id: string | null
          target_group_id: string | null
          target_role: string | null
          title_ar: string
          title_en: string | null
        }
        Insert: {
          author_id: string
          content_ar: string
          content_en?: string | null
          created_at?: string
          id?: string
          priority?: string | null
          published_at?: string | null
          scheduled_at: string
          status?: string | null
          target_course_id?: string | null
          target_group_id?: string | null
          target_role?: string | null
          title_ar: string
          title_en?: string | null
        }
        Update: {
          author_id?: string
          content_ar?: string
          content_en?: string | null
          created_at?: string
          id?: string
          priority?: string | null
          published_at?: string | null
          scheduled_at?: string
          status?: string | null
          target_course_id?: string | null
          target_group_id?: string | null
          target_role?: string | null
          title_ar?: string
          title_en?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "scheduled_announcements_target_course_id_fkey"
            columns: ["target_course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "scheduled_announcements_target_group_id_fkey"
            columns: ["target_group_id"]
            isOneToOne: false
            referencedRelation: "groups"
            referencedColumns: ["id"]
          },
        ]
      }
      security_threats: {
        Row: {
          ai_score: number | null
          blocked: boolean
          created_at: string
          details: string | null
          id: string
          ip_address: string | null
          reviewed: boolean
          reviewed_at: string | null
          reviewed_by: string | null
          severity: string
          threat_type: string
          url: string | null
          user_agent: string | null
        }
        Insert: {
          ai_score?: number | null
          blocked?: boolean
          created_at?: string
          details?: string | null
          id?: string
          ip_address?: string | null
          reviewed?: boolean
          reviewed_at?: string | null
          reviewed_by?: string | null
          severity?: string
          threat_type: string
          url?: string | null
          user_agent?: string | null
        }
        Update: {
          ai_score?: number | null
          blocked?: boolean
          created_at?: string
          details?: string | null
          id?: string
          ip_address?: string | null
          reviewed?: boolean
          reviewed_at?: string | null
          reviewed_by?: string | null
          severity?: string
          threat_type?: string
          url?: string | null
          user_agent?: string | null
        }
        Relationships: []
      }
      security_violations: {
        Row: {
          course_id: string | null
          created_at: string
          details: string | null
          device_info: string | null
          id: string
          is_reviewed: boolean | null
          lesson_id: string | null
          student_id: string
          teacher_id: string
          violation_type: string
        }
        Insert: {
          course_id?: string | null
          created_at?: string
          details?: string | null
          device_info?: string | null
          id?: string
          is_reviewed?: boolean | null
          lesson_id?: string | null
          student_id: string
          teacher_id: string
          violation_type?: string
        }
        Update: {
          course_id?: string | null
          created_at?: string
          details?: string | null
          device_info?: string | null
          id?: string
          is_reviewed?: boolean | null
          lesson_id?: string | null
          student_id?: string
          teacher_id?: string
          violation_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "security_violations_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "security_violations_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "security_violations_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "security_violations_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "public_teachers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "security_violations_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "teachers"
            referencedColumns: ["id"]
          },
        ]
      }
      site_settings: {
        Row: {
          allow_admin_access: boolean | null
          allow_teacher_access: boolean | null
          bypass_ips: string[] | null
          created_at: string
          estimated_end_time: string | null
          id: string
          maintenance_message: string | null
          maintenance_mode: boolean
          maintenance_reason: string | null
          updated_at: string
        }
        Insert: {
          allow_admin_access?: boolean | null
          allow_teacher_access?: boolean | null
          bypass_ips?: string[] | null
          created_at?: string
          estimated_end_time?: string | null
          id?: string
          maintenance_message?: string | null
          maintenance_mode?: boolean
          maintenance_reason?: string | null
          updated_at?: string
        }
        Update: {
          allow_admin_access?: boolean | null
          allow_teacher_access?: boolean | null
          bypass_ips?: string[] | null
          created_at?: string
          estimated_end_time?: string | null
          id?: string
          maintenance_message?: string | null
          maintenance_mode?: boolean
          maintenance_reason?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      site_templates: {
        Row: {
          accent_color: string | null
          background_color: string | null
          body_font: string | null
          border_radius: string | null
          button_styles: Json | null
          card_styles: Json | null
          category: string
          container_width: string | null
          created_at: string
          created_by: string | null
          custom_css: string | null
          description: string | null
          description_ar: string | null
          favicon_url: string | null
          font_size_base: string | null
          footer_styles: Json | null
          header_styles: Json | null
          heading_font: string | null
          id: string
          is_active: boolean | null
          is_default: boolean | null
          logo_url: string | null
          name: string
          name_ar: string
          primary_color: string | null
          secondary_color: string | null
          spacing_unit: string | null
          text_color: string | null
          updated_at: string
        }
        Insert: {
          accent_color?: string | null
          background_color?: string | null
          body_font?: string | null
          border_radius?: string | null
          button_styles?: Json | null
          card_styles?: Json | null
          category?: string
          container_width?: string | null
          created_at?: string
          created_by?: string | null
          custom_css?: string | null
          description?: string | null
          description_ar?: string | null
          favicon_url?: string | null
          font_size_base?: string | null
          footer_styles?: Json | null
          header_styles?: Json | null
          heading_font?: string | null
          id?: string
          is_active?: boolean | null
          is_default?: boolean | null
          logo_url?: string | null
          name: string
          name_ar: string
          primary_color?: string | null
          secondary_color?: string | null
          spacing_unit?: string | null
          text_color?: string | null
          updated_at?: string
        }
        Update: {
          accent_color?: string | null
          background_color?: string | null
          body_font?: string | null
          border_radius?: string | null
          button_styles?: Json | null
          card_styles?: Json | null
          category?: string
          container_width?: string | null
          created_at?: string
          created_by?: string | null
          custom_css?: string | null
          description?: string | null
          description_ar?: string | null
          favicon_url?: string | null
          font_size_base?: string | null
          footer_styles?: Json | null
          header_styles?: Json | null
          heading_font?: string | null
          id?: string
          is_active?: boolean | null
          is_default?: boolean | null
          logo_url?: string | null
          name?: string
          name_ar?: string
          primary_color?: string | null
          secondary_color?: string | null
          spacing_unit?: string | null
          text_color?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      smart_assessments: {
        Row: {
          assessment_type: string | null
          course_id: string | null
          created_at: string
          description: string | null
          difficulty_range: Json | null
          id: string
          is_published: boolean | null
          questions: Json | null
          settings: Json | null
          teacher_id: string
          time_limit_minutes: number | null
          title: string
          updated_at: string
        }
        Insert: {
          assessment_type?: string | null
          course_id?: string | null
          created_at?: string
          description?: string | null
          difficulty_range?: Json | null
          id?: string
          is_published?: boolean | null
          questions?: Json | null
          settings?: Json | null
          teacher_id: string
          time_limit_minutes?: number | null
          title: string
          updated_at?: string
        }
        Update: {
          assessment_type?: string | null
          course_id?: string | null
          created_at?: string
          description?: string | null
          difficulty_range?: Json | null
          id?: string
          is_published?: boolean | null
          questions?: Json | null
          settings?: Json | null
          teacher_id?: string
          time_limit_minutes?: number | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "smart_assessments_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "smart_assessments_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "public_teachers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "smart_assessments_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "teachers"
            referencedColumns: ["id"]
          },
        ]
      }
      student_achievements: {
        Row: {
          achievement_id: string
          completed: boolean | null
          completed_at: string | null
          created_at: string
          current_value: number | null
          id: string
          student_id: string
          updated_at: string
        }
        Insert: {
          achievement_id: string
          completed?: boolean | null
          completed_at?: string | null
          created_at?: string
          current_value?: number | null
          id?: string
          student_id: string
          updated_at?: string
        }
        Update: {
          achievement_id?: string
          completed?: boolean | null
          completed_at?: string | null
          created_at?: string
          current_value?: number | null
          id?: string
          student_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "student_achievements_achievement_id_fkey"
            columns: ["achievement_id"]
            isOneToOne: false
            referencedRelation: "achievements"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "student_achievements_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      student_badges: {
        Row: {
          badge_id: string
          earned_at: string
          id: string
          student_id: string
        }
        Insert: {
          badge_id: string
          earned_at?: string
          id?: string
          student_id: string
        }
        Update: {
          badge_id?: string
          earned_at?: string
          id?: string
          student_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "student_badges_badge_id_fkey"
            columns: ["badge_id"]
            isOneToOne: false
            referencedRelation: "badges"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "student_badges_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      student_flashcard_progress: {
        Row: {
          correct_count: number | null
          ease_factor: number | null
          flashcard_id: string
          id: string
          incorrect_count: number | null
          last_reviewed_at: string | null
          next_review_at: string | null
          student_id: string
          times_reviewed: number | null
        }
        Insert: {
          correct_count?: number | null
          ease_factor?: number | null
          flashcard_id: string
          id?: string
          incorrect_count?: number | null
          last_reviewed_at?: string | null
          next_review_at?: string | null
          student_id: string
          times_reviewed?: number | null
        }
        Update: {
          correct_count?: number | null
          ease_factor?: number | null
          flashcard_id?: string
          id?: string
          incorrect_count?: number | null
          last_reviewed_at?: string | null
          next_review_at?: string | null
          student_id?: string
          times_reviewed?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "student_flashcard_progress_flashcard_id_fkey"
            columns: ["flashcard_id"]
            isOneToOne: false
            referencedRelation: "flashcards"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "student_flashcard_progress_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      student_points: {
        Row: {
          created_at: string
          current_level: number
          id: string
          last_activity_date: string | null
          level_name: string | null
          streak_days: number | null
          student_id: string
          total_points: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          current_level?: number
          id?: string
          last_activity_date?: string | null
          level_name?: string | null
          streak_days?: number | null
          student_id: string
          total_points?: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          current_level?: number
          id?: string
          last_activity_date?: string | null
          level_name?: string | null
          streak_days?: number | null
          student_id?: string
          total_points?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "student_points_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: true
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      student_progress: {
        Row: {
          average_score: number | null
          completion_percentage: number | null
          course_id: string
          created_at: string
          id: string
          last_activity_at: string | null
          lessons_completed: number | null
          quizzes_completed: number | null
          student_id: string
          time_spent_minutes: number | null
          total_lessons: number | null
          updated_at: string
        }
        Insert: {
          average_score?: number | null
          completion_percentage?: number | null
          course_id: string
          created_at?: string
          id?: string
          last_activity_at?: string | null
          lessons_completed?: number | null
          quizzes_completed?: number | null
          student_id: string
          time_spent_minutes?: number | null
          total_lessons?: number | null
          updated_at?: string
        }
        Update: {
          average_score?: number | null
          completion_percentage?: number | null
          course_id?: string
          created_at?: string
          id?: string
          last_activity_at?: string | null
          lessons_completed?: number | null
          quizzes_completed?: number | null
          student_id?: string
          time_spent_minutes?: number | null
          total_lessons?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "student_progress_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "student_progress_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      student_teacher_selections: {
        Row: {
          created_at: string | null
          id: string
          status: string | null
          student_id: string
          teacher_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          status?: string | null
          student_id: string
          teacher_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          status?: string | null
          student_id?: string
          teacher_id?: string
        }
        Relationships: []
      }
      students: {
        Row: {
          created_at: string | null
          date_of_birth: string | null
          grade_level: string | null
          id: string
          school_name: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          date_of_birth?: string | null
          grade_level?: string | null
          id?: string
          school_name?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          date_of_birth?: string | null
          grade_level?: string | null
          id?: string
          school_name?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      study_guides: {
        Row: {
          content_ar: string | null
          content_en: string | null
          course_id: string | null
          created_at: string
          created_by: string | null
          estimated_time_minutes: number | null
          id: string
          is_ai_generated: boolean | null
          is_published: boolean | null
          lesson_id: string | null
          title_ar: string
          title_en: string | null
          topics: Json | null
          updated_at: string
        }
        Insert: {
          content_ar?: string | null
          content_en?: string | null
          course_id?: string | null
          created_at?: string
          created_by?: string | null
          estimated_time_minutes?: number | null
          id?: string
          is_ai_generated?: boolean | null
          is_published?: boolean | null
          lesson_id?: string | null
          title_ar: string
          title_en?: string | null
          topics?: Json | null
          updated_at?: string
        }
        Update: {
          content_ar?: string | null
          content_en?: string | null
          course_id?: string | null
          created_at?: string
          created_by?: string | null
          estimated_time_minutes?: number | null
          id?: string
          is_ai_generated?: boolean | null
          is_published?: boolean | null
          lesson_id?: string | null
          title_ar?: string
          title_en?: string | null
          topics?: Json | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "study_guides_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "study_guides_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
        ]
      }
      subscriptions: {
        Row: {
          created_at: string | null
          current_period_end: string | null
          current_period_start: string | null
          id: string
          plan_type: string
          status: string
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          plan_type?: string
          status?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          plan_type?: string
          status?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      support_messages: {
        Row: {
          created_at: string
          id: string
          is_read: boolean
          message: string
          sender_id: string
          sender_type: string
          ticket_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_read?: boolean
          message: string
          sender_id: string
          sender_type: string
          ticket_id: string
        }
        Update: {
          created_at?: string
          id?: string
          is_read?: boolean
          message?: string
          sender_id?: string
          sender_type?: string
          ticket_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "support_messages_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "support_tickets"
            referencedColumns: ["id"]
          },
        ]
      }
      support_tickets: {
        Row: {
          category: string | null
          created_at: string
          id: string
          priority: string
          status: string
          subject: string
          updated_at: string
          user_id: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          id?: string
          priority?: string
          status?: string
          subject: string
          updated_at?: string
          user_id: string
        }
        Update: {
          category?: string | null
          created_at?: string
          id?: string
          priority?: string
          status?: string
          subject?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      system_logs: {
        Row: {
          created_at: string
          id: string
          ip_address: string | null
          level: string
          message: string
          metadata: Json | null
          source: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          ip_address?: string | null
          level?: string
          message: string
          metadata?: Json | null
          source: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          ip_address?: string | null
          level?: string
          message?: string
          metadata?: Json | null
          source?: string
          user_id?: string | null
        }
        Relationships: []
      }
      teacher_achievements: {
        Row: {
          condition_type: string | null
          condition_value: number | null
          created_at: string
          description: string | null
          icon: string | null
          id: string
          is_active: boolean | null
          name: string
          points_reward: number | null
          rarity: string | null
          teacher_id: string
        }
        Insert: {
          condition_type?: string | null
          condition_value?: number | null
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          points_reward?: number | null
          rarity?: string | null
          teacher_id: string
        }
        Update: {
          condition_type?: string | null
          condition_value?: number | null
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          points_reward?: number | null
          rarity?: string | null
          teacher_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "teacher_achievements_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "public_teachers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "teacher_achievements_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "teachers"
            referencedColumns: ["id"]
          },
        ]
      }
      teacher_challenges: {
        Row: {
          challenge_type: string | null
          created_at: string
          description: string | null
          end_date: string | null
          id: string
          is_active: boolean | null
          reward_points: number | null
          start_date: string | null
          target_value: number | null
          teacher_id: string
          title: string
        }
        Insert: {
          challenge_type?: string | null
          created_at?: string
          description?: string | null
          end_date?: string | null
          id?: string
          is_active?: boolean | null
          reward_points?: number | null
          start_date?: string | null
          target_value?: number | null
          teacher_id: string
          title: string
        }
        Update: {
          challenge_type?: string | null
          created_at?: string
          description?: string | null
          end_date?: string | null
          id?: string
          is_active?: boolean | null
          reward_points?: number | null
          start_date?: string | null
          target_value?: number | null
          teacher_id?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "teacher_challenges_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "public_teachers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "teacher_challenges_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "teachers"
            referencedColumns: ["id"]
          },
        ]
      }
      teacher_gamification_settings: {
        Row: {
          created_at: string
          enable_badges: boolean | null
          enable_challenges: boolean | null
          enable_leaderboard: boolean | null
          id: string
          is_enabled: boolean | null
          points_per_assignment: number | null
          points_per_lesson: number | null
          points_per_quiz: number | null
          settings: Json | null
          teacher_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          enable_badges?: boolean | null
          enable_challenges?: boolean | null
          enable_leaderboard?: boolean | null
          id?: string
          is_enabled?: boolean | null
          points_per_assignment?: number | null
          points_per_lesson?: number | null
          points_per_quiz?: number | null
          settings?: Json | null
          teacher_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          enable_badges?: boolean | null
          enable_challenges?: boolean | null
          enable_leaderboard?: boolean | null
          id?: string
          is_enabled?: boolean | null
          points_per_assignment?: number | null
          points_per_lesson?: number | null
          points_per_quiz?: number | null
          settings?: Json | null
          teacher_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "teacher_gamification_settings_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: true
            referencedRelation: "public_teachers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "teacher_gamification_settings_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: true
            referencedRelation: "teachers"
            referencedColumns: ["id"]
          },
        ]
      }
      teacher_payment_info: {
        Row: {
          created_at: string | null
          id: string
          instapay_number: string | null
          teacher_id: string
          updated_at: string | null
          vodafone_cash_number: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          instapay_number?: string | null
          teacher_id: string
          updated_at?: string | null
          vodafone_cash_number?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          instapay_number?: string | null
          teacher_id?: string
          updated_at?: string | null
          vodafone_cash_number?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "teacher_payment_info_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: true
            referencedRelation: "public_teachers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "teacher_payment_info_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: true
            referencedRelation: "teachers"
            referencedColumns: ["id"]
          },
        ]
      }
      teacher_requests: {
        Row: {
          admin_comments: string | null
          availability: string | null
          bio: string | null
          created_at: string | null
          current_step: number | null
          email: string
          experience_years: number | null
          full_name: string
          hourly_rate: number | null
          id: string
          phone: string | null
          qualifications: string | null
          reviewer_id: string | null
          reviewer_notes: string | null
          social_links: Json | null
          status: Database["public"]["Enums"]["teacher_request_status"] | null
          subject: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          admin_comments?: string | null
          availability?: string | null
          bio?: string | null
          created_at?: string | null
          current_step?: number | null
          email: string
          experience_years?: number | null
          full_name: string
          hourly_rate?: number | null
          id?: string
          phone?: string | null
          qualifications?: string | null
          reviewer_id?: string | null
          reviewer_notes?: string | null
          social_links?: Json | null
          status?: Database["public"]["Enums"]["teacher_request_status"] | null
          subject: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          admin_comments?: string | null
          availability?: string | null
          bio?: string | null
          created_at?: string | null
          current_step?: number | null
          email?: string
          experience_years?: number | null
          full_name?: string
          hourly_rate?: number | null
          id?: string
          phone?: string | null
          qualifications?: string | null
          reviewer_id?: string | null
          reviewer_notes?: string | null
          social_links?: Json | null
          status?: Database["public"]["Enums"]["teacher_request_status"] | null
          subject?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      teachers: {
        Row: {
          bio: string | null
          created_at: string | null
          experience_years: number | null
          hourly_rate: number | null
          id: string
          is_active: boolean | null
          max_students: number | null
          subject: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          bio?: string | null
          created_at?: string | null
          experience_years?: number | null
          hourly_rate?: number | null
          id?: string
          is_active?: boolean | null
          max_students?: number | null
          subject: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          bio?: string | null
          created_at?: string | null
          experience_years?: number | null
          hourly_rate?: number | null
          id?: string
          is_active?: boolean | null
          max_students?: number | null
          subject?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      teaching_scenarios: {
        Row: {
          content: Json | null
          course_id: string | null
          created_at: string
          description: string | null
          difficulty: string | null
          duration_minutes: number | null
          id: string
          is_published: boolean | null
          scenario_type: string | null
          teacher_id: string
          title: string
          updated_at: string
        }
        Insert: {
          content?: Json | null
          course_id?: string | null
          created_at?: string
          description?: string | null
          difficulty?: string | null
          duration_minutes?: number | null
          id?: string
          is_published?: boolean | null
          scenario_type?: string | null
          teacher_id: string
          title: string
          updated_at?: string
        }
        Update: {
          content?: Json | null
          course_id?: string | null
          created_at?: string
          description?: string | null
          difficulty?: string | null
          duration_minutes?: number | null
          id?: string
          is_published?: boolean | null
          scenario_type?: string | null
          teacher_id?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "teaching_scenarios_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "teaching_scenarios_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "public_teachers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "teaching_scenarios_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "teachers"
            referencedColumns: ["id"]
          },
        ]
      }
      two_factor_auth: {
        Row: {
          backup_codes: Json | null
          created_at: string
          id: string
          is_enabled: boolean
          method: string
          phone_number: string | null
          secret_key: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          backup_codes?: Json | null
          created_at?: string
          id?: string
          is_enabled?: boolean
          method?: string
          phone_number?: string | null
          secret_key?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          backup_codes?: Json | null
          created_at?: string
          id?: string
          is_enabled?: boolean
          method?: string
          phone_number?: string | null
          secret_key?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      two_factor_codes: {
        Row: {
          code: string
          created_at: string
          expires_at: string
          id: string
          is_used: boolean
          user_id: string
        }
        Insert: {
          code: string
          created_at?: string
          expires_at: string
          id?: string
          is_used?: boolean
          user_id: string
        }
        Update: {
          code?: string
          created_at?: string
          expires_at?: string
          id?: string
          is_used?: boolean
          user_id?: string
        }
        Relationships: []
      }
      two_factor_settings: {
        Row: {
          created_at: string
          description: string | null
          id: string
          setting_key: string
          setting_value: boolean
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          setting_key: string
          setting_value?: boolean
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          setting_key?: string
          setting_value?: boolean
          updated_at?: string
        }
        Relationships: []
      }
      user_bans: {
        Row: {
          ban_type: string
          banned_by: string
          created_at: string
          expires_at: string | null
          id: string
          is_active: boolean
          reason: string
          updated_at: string
          user_id: string
        }
        Insert: {
          ban_type?: string
          banned_by: string
          created_at?: string
          expires_at?: string | null
          id?: string
          is_active?: boolean
          reason: string
          updated_at?: string
          user_id: string
        }
        Update: {
          ban_type?: string
          banned_by?: string
          created_at?: string
          expires_at?: string | null
          id?: string
          is_active?: boolean
          reason?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      user_sessions: {
        Row: {
          created_at: string | null
          id: string
          ip_address: string | null
          is_active: boolean | null
          last_active_at: string | null
          user_agent: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          ip_address?: string | null
          is_active?: boolean | null
          last_active_at?: string | null
          user_agent?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          ip_address?: string | null
          is_active?: boolean | null
          last_active_at?: string | null
          user_agent?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_warnings: {
        Row: {
          acknowledged: boolean
          acknowledged_at: string | null
          created_at: string
          id: string
          reason: string
          severity: string
          user_id: string
          warned_by: string
        }
        Insert: {
          acknowledged?: boolean
          acknowledged_at?: string | null
          created_at?: string
          id?: string
          reason: string
          severity?: string
          user_id: string
          warned_by: string
        }
        Update: {
          acknowledged?: boolean
          acknowledged_at?: string | null
          created_at?: string
          id?: string
          reason?: string
          severity?: string
          user_id?: string
          warned_by?: string
        }
        Relationships: []
      }
      virtual_labs: {
        Row: {
          course_id: string | null
          created_at: string
          description: string | null
          difficulty: string | null
          duration_minutes: number | null
          id: string
          instructions: Json | null
          is_published: boolean | null
          lab_type: string | null
          teacher_id: string
          title: string
          tools: Json | null
          updated_at: string
        }
        Insert: {
          course_id?: string | null
          created_at?: string
          description?: string | null
          difficulty?: string | null
          duration_minutes?: number | null
          id?: string
          instructions?: Json | null
          is_published?: boolean | null
          lab_type?: string | null
          teacher_id: string
          title: string
          tools?: Json | null
          updated_at?: string
        }
        Update: {
          course_id?: string | null
          created_at?: string
          description?: string | null
          difficulty?: string | null
          duration_minutes?: number | null
          id?: string
          instructions?: Json | null
          is_published?: boolean | null
          lab_type?: string | null
          teacher_id?: string
          title?: string
          tools?: Json | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "virtual_labs_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "virtual_labs_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "public_teachers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "virtual_labs_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "teachers"
            referencedColumns: ["id"]
          },
        ]
      }
      virtual_tutors: {
        Row: {
          assigned_courses: string[] | null
          created_at: string
          id: string
          is_active: boolean | null
          name: string
          personality: string | null
          settings: Json | null
          teacher_id: string
          teaching_style: string | null
        }
        Insert: {
          assigned_courses?: string[] | null
          created_at?: string
          id?: string
          is_active?: boolean | null
          name: string
          personality?: string | null
          settings?: Json | null
          teacher_id: string
          teaching_style?: string | null
        }
        Update: {
          assigned_courses?: string[] | null
          created_at?: string
          id?: string
          is_active?: boolean | null
          name?: string
          personality?: string | null
          settings?: Json | null
          teacher_id?: string
          teaching_style?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "virtual_tutors_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "public_teachers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "virtual_tutors_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "teachers"
            referencedColumns: ["id"]
          },
        ]
      }
      zoom_meetings: {
        Row: {
          course_id: string | null
          created_at: string | null
          description: string | null
          duration_minutes: number | null
          id: string
          is_recurring: boolean | null
          meeting_id: string | null
          meeting_url: string
          password: string | null
          scheduled_at: string
          status: string | null
          teacher_id: string
          title: string
        }
        Insert: {
          course_id?: string | null
          created_at?: string | null
          description?: string | null
          duration_minutes?: number | null
          id?: string
          is_recurring?: boolean | null
          meeting_id?: string | null
          meeting_url: string
          password?: string | null
          scheduled_at: string
          status?: string | null
          teacher_id: string
          title: string
        }
        Update: {
          course_id?: string | null
          created_at?: string | null
          description?: string | null
          duration_minutes?: number | null
          id?: string
          is_recurring?: boolean | null
          meeting_id?: string | null
          meeting_url?: string
          password?: string | null
          scheduled_at?: string
          status?: string | null
          teacher_id?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "zoom_meetings_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "zoom_meetings_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "public_teachers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "zoom_meetings_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "teachers"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      public_teachers: {
        Row: {
          avatar_url: string | null
          bio: string | null
          experience_years: number | null
          full_name: string | null
          hourly_rate: number | null
          id: string | null
          is_active: boolean | null
          subject: string | null
        }
        Relationships: []
      }
      student_zoom_meetings: {
        Row: {
          course_id: string | null
          created_at: string | null
          description: string | null
          duration_minutes: number | null
          id: string | null
          is_recurring: boolean | null
          meeting_id: string | null
          meeting_url: string | null
          scheduled_at: string | null
          status: string | null
          teacher_id: string | null
          title: string | null
        }
        Insert: {
          course_id?: string | null
          created_at?: string | null
          description?: string | null
          duration_minutes?: number | null
          id?: string | null
          is_recurring?: boolean | null
          meeting_id?: string | null
          meeting_url?: string | null
          scheduled_at?: string | null
          status?: string | null
          teacher_id?: string | null
          title?: string | null
        }
        Update: {
          course_id?: string | null
          created_at?: string | null
          description?: string | null
          duration_minutes?: number | null
          id?: string | null
          is_recurring?: boolean | null
          meeting_id?: string | null
          meeting_url?: string | null
          scheduled_at?: string | null
          status?: string | null
          teacher_id?: string | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "zoom_meetings_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "zoom_meetings_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "public_teachers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "zoom_meetings_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "teachers"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      get_student_id: { Args: { _user_id: string }; Returns: string }
      get_student_zoom_meetings: {
        Args: never
        Returns: {
          course_id: string
          created_at: string
          description: string
          duration_minutes: number
          id: string
          is_recurring: boolean
          meeting_id: string
          meeting_url: string
          scheduled_at: string
          status: string
          teacher_id: string
          title: string
        }[]
      }
      get_teacher_id: { Args: { _user_id: string }; Returns: string }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      is_own_teacher_profile: { Args: { _user_id: string }; Returns: boolean }
      parent_has_student: {
        Args: { _parent_user_id: string; _student_id: string }
        Returns: boolean
      }
      student_enrolled_in_course: {
        Args: { _course_id: string; _student_user_id: string }
        Returns: boolean
      }
      student_in_group: {
        Args: { _group_id: string; _student_user_id: string }
        Returns: boolean
      }
      teacher_has_enrolled_student: {
        Args: { _student_id: string; _teacher_user_id: string }
        Returns: boolean
      }
      teacher_owns_group: {
        Args: { _group_id: string; _teacher_user_id: string }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "teacher" | "student" | "parent"
      teacher_request_status:
        | "pending"
        | "under_review"
        | "documents_required"
        | "approved"
        | "rejected"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "teacher", "student", "parent"],
      teacher_request_status: [
        "pending",
        "under_review",
        "documents_required",
        "approved",
        "rejected",
      ],
    },
  },
} as const
