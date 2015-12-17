class InitDatum
  <<-FORMAT
    {
      head: {title: string}
      user: User
      char: {
        info: CharInfo
        tags: CharTags
      }
    }
  FORMAT

  attr_accessor :head, :info, :tags

  def initialize(head, char_info, char_tags)
    self.head = {}.merge(head)
    self.info = char_info || {}
    self.tags = char_tags || {}
  end

  def to_json
    return {
        head: self.head,
        user: {},
        char: self.info,
        char_tags: self.tags
    }.to_json
  end
end
