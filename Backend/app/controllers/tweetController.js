getFeed: async (req, res) => {
  try {
    const tweets = await Tweet.findAll({
      order: [['created_at', 'DESC']],
      include: [
        { model: User, as: 'autor', attributes: ['id', 'username'] },
        {
          model: Comment,
          as: 'comments',
          include: [{ model: User, as: 'autor', attributes: ['id', 'username'] }]
        }
      ]
    });

    res.json(tweets);
  } catch (error) {
    console.error('Feed error:', error);
    res.status(500).json({ message: error.message });
  }
},
