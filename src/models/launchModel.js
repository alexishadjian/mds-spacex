const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const launchSchema = new Schema({
    flight_number: {
      type: Number,
      required: true,
    },
    mission_name: {
      type: String,
      required: true,
    },
    mission_id: {
      type: [String],
      default: [],
    },
    launch_year: {
      type: String,
      required: true,
    },
    launch_date_unix: {
      type: Number,
      required: true,
    },
    launch_date_utc: {
      type: Date,
      required: true,
    },
    launch_date_local: {
      type: Date,
      required: true,
    },
    is_tentative: {
      type: Boolean,
      default: false,
    },
    tentative_max_precision: {
      type: String,
      default: 'hour',
    },
    tbd: {
      type: Boolean,
      default: false,
    },
    launch_window: {
      type: Number,
      required: true,
    },
    rocket: {
      rocket_id: {
        type: String,
        required: true,
      },
      rocket_name: {
        type: String,
        required: true,
      },
      rocket_type: {
        type: String,
        required: true,
      },
      first_stage: {
        cores: [
          {
            core_serial: String,
            flight: Number,
            block: Number,
            gridfins: Boolean,
            legs: Boolean,
            reused: Boolean,
            land_success: Boolean,
            landing_intent: Boolean,
            landing_type: String,
            landing_vehicle: String,
          },
        ],
      },
      second_stage: {
        block: Number,
        payloads: [
          {
            payload_id: String,
            norad_id: [Number],
            reused: Boolean,
            customers: [String],
            nationality: String,
            manufacturer: String,
            payload_type: String,
            payload_mass_kg: Number,
            payload_mass_lbs: Number,
            orbit: String,
            orbit_params: {
              reference_system: String,
              regime: String,
              longitude: Number,
              semi_major_axis_km: Number,
              eccentricity: Number,
              periapsis_km: Number,
              apoapsis_km: Number,
              inclination_deg: Number,
              period_min: Number,
              lifespan_years: Number,
              epoch: Date,
              mean_motion: Number,
              raan: Number,
              arg_of_pericenter: Number,
              mean_anomaly: Number,
            },
          },
        ],
      },
      fairings: {
        reused: Boolean,
        recovery_attempt: Boolean,
        recovered: Boolean,
        ship: String,
      },
    },
    ships: {
      type: [String],
      default: [],
    },
    telemetry: {
      flight_club: String,
    },
    launch_site: {
      site_id: String,
      site_name: String,
      site_name_long: String,
    },
    launch_success: {
      type: Boolean,
      required: true,
    },
    links: {
      mission_patch: String,
      mission_patch_small: String,
      reddit_campaign: String,
      reddit_launch: String,
      reddit_recovery: String,
      reddit_media: String,
      presskit: String,
      article_link: String,
      wikipedia: String,
      video_link: String,
      youtube_id: String,
      flickr_images: [String],
    },
    details: String,
    upcoming: {
      type: Boolean,
      required: true,
    },
    static_fire_date_utc: {
      type: Date,
    },
    static_fire_date_unix: {
      type: Number,
    },
    timeline: {
      webcast_liftoff: Number,
      go_for_prop_loading: Number,
      rp1_loading: Number,
      stage1_lox_loading: Number,
      stage2_lox_loading: Number,
      engine_chill: Number,
      prelaunch_checks: Number,
      propellant_pressurization: Number,
      go_for_launch: Number,
      ignition: Number,
      liftoff: Number,
      maxq: Number,
      meco: Number,
      stage_sep: Number,
      second_stage_ignition: Number,
      fairing_deploy: Number,
      first_stage_entry_burn: Number,
      seco_1: Number,
      first_stage_landing: Number,
      second_stage_restart: Number,
      seco_2: Number,
      payload_deploy: Number,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
    post_id: String,
});

module.exports = mongoose.model('Launch', launchSchema);