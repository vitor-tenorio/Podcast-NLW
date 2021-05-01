import mongoose from '@/database';
import Slugify from '@/utils/Slugify';

const PodcastSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
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
    type: String,
    required: true,
  },
});

PodcastSchema.pre('save', function (next) {
  const title = this.title;
  this.slug = Slugify(title);
});

export default mongoose.model('Podcast', PodcastSchema);
