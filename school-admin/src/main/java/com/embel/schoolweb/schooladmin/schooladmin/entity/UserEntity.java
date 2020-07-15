package com.embel.schoolweb.schooladmin.schooladmin.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.TableGenerator;

import com.fasterxml.jackson.annotation.JsonInclude;

@Entity
@Table(name="student_user")
@JsonInclude(JsonInclude.Include.NON_NULL)
@TableGenerator(name="seq", initialValue=0)
public class UserEntity {
	
	@Id
	@Column(name="stud_user_id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long userId;
	
	@Column(name="user_stud_class")
	private String userStudClass;
	
	@Column(name="user_chapter_name")
	private String userChapterName;
	
	@Column(name="user_lesson_name")
	private String userLessonName;
	
	@Column(name="user_topic_name")
	private String userTopicName;

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getUserStudClass() {
		return userStudClass;
	}

	public void setUserStudClass(String userStudClass) {
		this.userStudClass = userStudClass;
	}

	public String getUserChapterName() {
		return userChapterName;
	}

	public void setUserChapterName(String userChapterName) {
		this.userChapterName = userChapterName;
	}

	public String getUserLessonName() {
		return userLessonName;
	}

	public void setUserLessonName(String userLessonName) {
		this.userLessonName = userLessonName;
	}

	public String getUserTopicName() {
		return userTopicName;
	}

	public void setUserTopicName(String userTopicName) {
		this.userTopicName = userTopicName;
	}

	@Override
	public String toString() {
		return "UserEntity [userId=" + userId + ", userStudClass=" + userStudClass + ", userChapterName="
				+ userChapterName + ", userLessonName=" + userLessonName + ", userTopicName=" + userTopicName + "]";
	}

	public UserEntity(Long userId, String userStudClass, String userChapterName, String userLessonName,
			String userTopicName) {
		super();
		this.userId = userId;
		this.userStudClass = userStudClass;
		this.userChapterName = userChapterName;
		this.userLessonName = userLessonName;
		this.userTopicName = userTopicName;
	}

	public UserEntity() {
		super();
		// TODO Auto-generated constructor stub
	}
}
