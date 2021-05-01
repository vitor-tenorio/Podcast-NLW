import mongoose from '@/database';
import Slugify from '@/utils/Slugify';

const PodcastSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
  },
  members: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  file: {
    url: {
      type: String,
    },
    duration: {
      type: Number,
    },
    type: {
      type: String,
    },
  },
  published_at: {
    type: Date,
    default: Date.now,
  },
});

PodcastSchema.pre('save', function (next) {
  const title = this.title;
  this.slug = Slugify(title);
  next();
});

export default mongoose.model('Podcast', PodcastSchema);
