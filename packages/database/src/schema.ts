export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          phone: string | null;
          avatar_url: string | null;
          role: string;
          subsidiary_id: string | null;
          metadata: Json | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          phone?: string | null;
          avatar_url?: string | null;
          role?: string;
          subsidiary_id?: string | null;
          metadata?: Json | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          phone?: string | null;
          avatar_url?: string | null;
          role?: string;
          subsidiary_id?: string | null;
          metadata?: Json | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey";
            columns: ["id"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "profiles_subsidiary_id_fkey";
            columns: ["subsidiary_id"];
            isOneToOne: false;
            referencedRelation: "subsidiaries";
            referencedColumns: ["id"];
          },
        ];
      };
      vehicles: {
        Row: {
          id: string;
          subsidiary_id: string;
          make: string;
          model: string;
          year: number;
          trim: string | null;
          price: number;
          currency: string;
          condition: string;
          mileage: number | null;
          vin: string | null;
          exterior_color: string | null;
          interior_color: string | null;
          fuel_type: string | null;
          transmission: string | null;
          engine: string | null;
          drivetrain: string | null;
          seats: number | null;
          doors: number | null;
          description: string | null;
          status: string;
          featured: boolean;
          slug: string;
          metadata: Json | null;
          created_at: string;
          updated_at: string;
          created_by: string | null;
        };
        Insert: {
          id?: string;
          subsidiary_id: string;
          make: string;
          model: string;
          year: number;
          trim?: string | null;
          price: number;
          currency?: string;
          condition: string;
          mileage?: number | null;
          vin?: string | null;
          exterior_color?: string | null;
          interior_color?: string | null;
          fuel_type?: string | null;
          transmission?: string | null;
          engine?: string | null;
          drivetrain?: string | null;
          seats?: number | null;
          doors?: number | null;
          description?: string | null;
          status?: string;
          featured?: boolean;
          slug?: string;
          metadata?: Json | null;
          created_at?: string;
          updated_at?: string;
          created_by?: string | null;
        };
        Update: {
          id?: string;
          subsidiary_id?: string;
          make?: string;
          model?: string;
          year?: number;
          trim?: string | null;
          price?: number;
          currency?: string;
          condition?: string;
          mileage?: number | null;
          vin?: string | null;
          exterior_color?: string | null;
          interior_color?: string | null;
          fuel_type?: string | null;
          transmission?: string | null;
          engine?: string | null;
          drivetrain?: string | null;
          seats?: number | null;
          doors?: number | null;
          description?: string | null;
          status?: string;
          featured?: boolean;
          slug?: string;
          metadata?: Json | null;
          created_at?: string;
          updated_at?: string;
          created_by?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "vehicles_subsidiary_id_fkey";
            columns: ["subsidiary_id"];
            isOneToOne: false;
            referencedRelation: "subsidiaries";
            referencedColumns: ["id"];
          },
        ];
      };
      vehicle_images: {
        Row: {
          id: string;
          vehicle_id: string;
          url: string;
          alt: string | null;
          width: number | null;
          height: number | null;
          sort_order: number;
          is_primary: boolean;
          type: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          vehicle_id: string;
          url: string;
          alt?: string | null;
          width?: number | null;
          height?: number | null;
          sort_order?: number;
          is_primary?: boolean;
          type?: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          vehicle_id?: string;
          url?: string;
          alt?: string | null;
          width?: number | null;
          height?: number | null;
          sort_order?: number;
          is_primary?: boolean;
          type?: string;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "vehicle_images_vehicle_id_fkey";
            columns: ["vehicle_id"];
            isOneToOne: false;
            referencedRelation: "vehicles";
            referencedColumns: ["id"];
          },
        ];
      };
      vehicle_features: {
        Row: {
          id: string;
          vehicle_id: string;
          category: string;
          name: string;
          value: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          vehicle_id: string;
          category: string;
          name: string;
          value: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          vehicle_id?: string;
          category?: string;
          name?: string;
          value?: string;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "vehicle_features_vehicle_id_fkey";
            columns: ["vehicle_id"];
            isOneToOne: false;
            referencedRelation: "vehicles";
            referencedColumns: ["id"];
          },
        ];
      };
      interior_projects: {
        Row: {
          id: string;
          subsidiary_id: string;
          title: string;
          slug: string;
          client_name: string | null;
          project_type: string;
          location: string | null;
          area_size: string | null;
          budget_range: string | null;
          completion_date: string | null;
          description: string | null;
          status: string;
          featured: boolean;
          metadata: Json | null;
          created_at: string;
          updated_at: string;
          created_by: string | null;
        };
        Insert: {
          id?: string;
          subsidiary_id: string;
          title: string;
          slug?: string;
          client_name?: string | null;
          project_type: string;
          location?: string | null;
          area_size?: string | null;
          budget_range?: string | null;
          completion_date?: string | null;
          description?: string | null;
          status?: string;
          featured?: boolean;
          metadata?: Json | null;
          created_at?: string;
          updated_at?: string;
          created_by?: string | null;
        };
        Update: {
          id?: string;
          subsidiary_id?: string;
          title?: string;
          slug?: string;
          client_name?: string | null;
          project_type?: string;
          location?: string | null;
          area_size?: string | null;
          budget_range?: string | null;
          completion_date?: string | null;
          description?: string | null;
          status?: string;
          featured?: boolean;
          metadata?: Json | null;
          created_at?: string;
          updated_at?: string;
          created_by?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "interior_projects_subsidiary_id_fkey";
            columns: ["subsidiary_id"];
            isOneToOne: false;
            referencedRelation: "subsidiaries";
            referencedColumns: ["id"];
          },
        ];
      };
      project_images: {
        Row: {
          id: string;
          project_id: string;
          url: string;
          alt: string | null;
          width: number | null;
          height: number | null;
          sort_order: number;
          is_primary: boolean;
          is_before: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          project_id: string;
          url: string;
          alt?: string | null;
          width?: number | null;
          height?: number | null;
          sort_order?: number;
          is_primary?: boolean;
          is_before?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          project_id?: string;
          url?: string;
          alt?: string | null;
          width?: number | null;
          height?: number | null;
          sort_order?: number;
          is_primary?: boolean;
          is_before?: boolean;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "project_images_project_id_fkey";
            columns: ["project_id"];
            isOneToOne: false;
            referencedRelation: "interior_projects";
            referencedColumns: ["id"];
          },
        ];
      };
      inquiries: {
        Row: {
          id: string;
          subsidiary_id: string;
          type: string;
          name: string;
          email: string;
          phone: string | null;
          message: string | null;
          source: string | null;
          status: string;
          assigned_to: string | null;
          metadata: Json | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          subsidiary_id: string;
          type: string;
          name: string;
          email: string;
          phone?: string | null;
          message?: string | null;
          source?: string | null;
          status?: string;
          assigned_to?: string | null;
          metadata?: Json | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          subsidiary_id?: string;
          type?: string;
          name?: string;
          email?: string;
          phone?: string | null;
          message?: string | null;
          source?: string | null;
          status?: string;
          assigned_to?: string | null;
          metadata?: Json | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "inquiries_subsidiary_id_fkey";
            columns: ["subsidiary_id"];
            isOneToOne: false;
            referencedRelation: "subsidiaries";
            referencedColumns: ["id"];
          },
        ];
      };
      test_drives: {
        Row: {
          id: string;
          vehicle_id: string;
          name: string;
          email: string;
          phone: string;
          preferred_date: string;
          preferred_time: string | null;
          status: string;
          notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          vehicle_id: string;
          name: string;
          email: string;
          phone: string;
          preferred_date: string;
          preferred_time?: string | null;
          status?: string;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          vehicle_id?: string;
          name?: string;
          email?: string;
          phone?: string;
          preferred_date?: string;
          preferred_time?: string | null;
          status?: string;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "test_drives_vehicle_id_fkey";
            columns: ["vehicle_id"];
            isOneToOne: false;
            referencedRelation: "vehicles";
            referencedColumns: ["id"];
          },
        ];
      };
      consultations: {
        Row: {
          id: string;
          subsidiary_id: string;
          name: string;
          email: string;
          phone: string;
          project_type: string | null;
          preferred_date: string;
          preferred_time: string | null;
          budget_range: string | null;
          message: string | null;
          status: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          subsidiary_id: string;
          name: string;
          email: string;
          phone: string;
          project_type?: string | null;
          preferred_date: string;
          preferred_time?: string | null;
          budget_range?: string | null;
          message?: string | null;
          status?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          subsidiary_id?: string;
          name?: string;
          email?: string;
          phone?: string;
          project_type?: string | null;
          preferred_date?: string;
          preferred_time?: string | null;
          budget_range?: string | null;
          message?: string | null;
          status?: string;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "consultations_subsidiary_id_fkey";
            columns: ["subsidiary_id"];
            isOneToOne: false;
            referencedRelation: "subsidiaries";
            referencedColumns: ["id"];
          },
        ];
      };
      subsidiaries: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description: string | null;
          contact_email: string | null;
          contact_phone: string | null;
          address: Json | null;
          is_active: boolean;
          sort_order: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          description?: string | null;
          contact_email?: string | null;
          contact_phone?: string | null;
          address?: Json | null;
          is_active?: boolean;
          sort_order?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          slug?: string;
          description?: string | null;
          contact_email?: string | null;
          contact_phone?: string | null;
          address?: Json | null;
          is_active?: boolean;
          sort_order?: number;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      audit_logs: {
        Row: {
          id: string;
          user_id: string | null;
          action: string;
          entity_type: string;
          entity_id: string | null;
          old_values: Json | null;
          new_values: Json | null;
          ip_address: string | null;
          user_agent: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id?: string | null;
          action: string;
          entity_type: string;
          entity_id?: string | null;
          old_values?: Json | null;
          new_values?: Json | null;
          ip_address?: string | null;
          user_agent?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string | null;
          action?: string;
          entity_type?: string;
          entity_id?: string | null;
          old_values?: Json | null;
          new_values?: Json | null;
          ip_address?: string | null;
          user_agent?: string | null;
          created_at?: string;
        };
        Relationships: [];
      };
      services: {
        Row: {
          id: string;
          subsidiary_id: string;
          name: string;
          slug: string;
          description: string | null;
          icon: string | null;
          sort_order: number;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          subsidiary_id: string;
          name: string;
          slug: string;
          description?: string | null;
          icon?: string | null;
          sort_order?: number;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          subsidiary_id?: string;
          name?: string;
          slug?: string;
          description?: string | null;
          icon?: string | null;
          sort_order?: number;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "services_subsidiary_id_fkey";
            columns: ["subsidiary_id"];
            isOneToOne: false;
            referencedRelation: "subsidiaries";
            referencedColumns: ["id"];
          },
        ];
      };
      testimonials: {
        Row: {
          id: string;
          subsidiary_id: string | null;
          client_name: string;
          client_title: string | null;
          content: string;
          rating: number | null;
          is_featured: boolean;
          sort_order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          subsidiary_id?: string | null;
          client_name: string;
          client_title?: string | null;
          content: string;
          rating?: number | null;
          is_featured?: boolean;
          sort_order?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          subsidiary_id?: string | null;
          client_name?: string;
          client_title?: string | null;
          content?: string;
          rating?: number | null;
          is_featured?: boolean;
          sort_order?: number;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "testimonials_subsidiary_id_fkey";
            columns: ["subsidiary_id"];
            isOneToOne: false;
            referencedRelation: "subsidiaries";
            referencedColumns: ["id"];
          },
        ];
      };
      faqs: {
        Row: {
          id: string;
          subsidiary_id: string | null;
          question: string;
          answer: string;
          category: string | null;
          sort_order: number;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          subsidiary_id?: string | null;
          question: string;
          answer: string;
          category?: string | null;
          sort_order?: number;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          subsidiary_id?: string | null;
          question?: string;
          answer?: string;
          category?: string | null;
          sort_order?: number;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "faqs_subsidiary_id_fkey";
            columns: ["subsidiary_id"];
            isOneToOne: false;
            referencedRelation: "subsidiaries";
            referencedColumns: ["id"];
          },
        ];
      };
      leadership: {
        Row: {
          id: string;
          subsidiary_id: string | null;
          name: string;
          title: string;
          bio: string | null;
          image_url: string | null;
          sort_order: number;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          subsidiary_id?: string | null;
          name: string;
          title: string;
          bio?: string | null;
          image_url?: string | null;
          sort_order?: number;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          subsidiary_id?: string | null;
          name?: string;
          title?: string;
          bio?: string | null;
          image_url?: string | null;
          sort_order?: number;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "leadership_subsidiary_id_fkey";
            columns: ["subsidiary_id"];
            isOneToOne: false;
            referencedRelation: "subsidiaries";
            referencedColumns: ["id"];
          },
        ];
      };
      company_info: {
        Row: {
          id: string;
          key: string;
          value: Json;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          key: string;
          value: Json;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          key?: string;
          value?: Json;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      saved_vehicles: {
        Row: {
          id: string;
          user_id: string;
          vehicle_id: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          vehicle_id: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          vehicle_id?: string;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "saved_vehicles_vehicle_id_fkey";
            columns: ["vehicle_id"];
            isOneToOne: false;
            referencedRelation: "vehicles";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "saved_vehicles_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
        ];
      };
      recently_viewed: {
        Row: {
          id: string;
          user_id: string;
          vehicle_id: string;
          viewed_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          vehicle_id: string;
          viewed_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          vehicle_id?: string;
          viewed_at?: string;
        };
        Relationships: [];
      };
      crm_contacts: {
        Row: {
          id: string;
          subsidiary_id: string | null;
          name: string;
          email: string;
          phone: string | null;
          company: string | null;
          source: string | null;
          tags: string[] | null;
          metadata: Json | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          subsidiary_id?: string | null;
          name: string;
          email: string;
          phone?: string | null;
          company?: string | null;
          source?: string | null;
          tags?: string[] | null;
          metadata?: Json | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          subsidiary_id?: string | null;
          name?: string;
          email?: string;
          phone?: string | null;
          company?: string | null;
          source?: string | null;
          tags?: string[] | null;
          metadata?: Json | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "crm_contacts_subsidiary_id_fkey";
            columns: ["subsidiary_id"];
            isOneToOne: false;
            referencedRelation: "subsidiaries";
            referencedColumns: ["id"];
          },
        ];
      };
      crm_interactions: {
        Row: {
          id: string;
          contact_id: string;
          type: string;
          summary: string;
          details: Json | null;
          performed_by: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          contact_id: string;
          type: string;
          summary: string;
          details?: Json | null;
          performed_by?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          contact_id?: string;
          type?: string;
          summary?: string;
          details?: Json | null;
          performed_by?: string | null;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "crm_interactions_contact_id_fkey";
            columns: ["contact_id"];
            isOneToOne: false;
            referencedRelation: "crm_contacts";
            referencedColumns: ["id"];
          },
        ];
      };
      crm_leads: {
        Row: {
          id: string;
          subsidiary_id: string | null;
          contact_id: string;
          source: string;
          status: string;
          score: number | null;
          assigned_to: string | null;
          notes: string | null;
          converted_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          subsidiary_id?: string | null;
          contact_id: string;
          source: string;
          status?: string;
          score?: number | null;
          assigned_to?: string | null;
          notes?: string | null;
          converted_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          subsidiary_id?: string | null;
          contact_id?: string;
          source?: string;
          status?: string;
          score?: number | null;
          assigned_to?: string | null;
          notes?: string | null;
          converted_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "crm_leads_contact_id_fkey";
            columns: ["contact_id"];
            isOneToOne: false;
            referencedRelation: "crm_contacts";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "crm_leads_subsidiary_id_fkey";
            columns: ["subsidiary_id"];
            isOneToOne: false;
            referencedRelation: "subsidiaries";
            referencedColumns: ["id"];
          },
        ];
      };
      analytics_events: {
        Row: {
          id: string;
          event_name: string;
          properties: Json | null;
          user_id: string | null;
          session_id: string | null;
          page_url: string | null;
          timestamp: string;
        };
        Insert: {
          id?: string;
          event_name: string;
          properties?: Json | null;
          user_id?: string | null;
          session_id?: string | null;
          page_url?: string | null;
          timestamp?: string;
        };
        Update: {
          id?: string;
          event_name?: string;
          properties?: Json | null;
          user_id?: string | null;
          session_id?: string | null;
          page_url?: string | null;
          timestamp?: string;
        };
        Relationships: [];
      };
      project_services: {
        Row: {
          id: string;
          project_id: string;
          service_id: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          project_id: string;
          service_id: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          project_id?: string;
          service_id?: string;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "project_services_project_id_fkey";
            columns: ["project_id"];
            isOneToOne: false;
            referencedRelation: "interior_projects";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "project_services_service_id_fkey";
            columns: ["service_id"];
            isOneToOne: false;
            referencedRelation: "services";
            referencedColumns: ["id"];
          },
        ];
      };
      user_roles: {
        Row: {
          id: string;
          user_id: string;
          role: string;
          subsidiary_id: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          role: string;
          subsidiary_id?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          role?: string;
          subsidiary_id?: string | null;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "user_roles_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: {
      vehicle_condition: 'new' | 'used' | 'certified_pre_owned';
      inquiry_status: 'new' | 'contacted' | 'qualified' | 'converted' | 'closed';
      booking_status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
      project_status: 'planning' | 'in_progress' | 'review' | 'completed';
    };
    CompositeTypes: Record<string, never>;
  };
};
