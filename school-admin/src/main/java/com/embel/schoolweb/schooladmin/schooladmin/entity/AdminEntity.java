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
@Table(name="student_admin")
@JsonInclude(JsonInclude.Include.NON_NULL)
@TableGenerator(name="seq", initialValue=0)
public class AdminEntity {
	
	@Id
	@Column(name="stud_admin_id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="stud_class")
	private String studClass;
	
	@Column(name="chapter_name")
	private String chapterName;
	
	@Column(name="lession_name")
	private String lessionName;
	
	@Column(name="topic_name")
	private String topicName;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getStudClass() {
		return studClass;
	}

	public void setStudClass(String studClass) {
		this.studClass = studClass;
	}

	public String getChapterName() {
		return chapterName;
	}

	public void setChapterName(String chapterName) {
		this.chapterName = chapterName;
	}

	public String getLessionName() {
		return lessionName;
	}

	public void setLessionName(String lessionName) {
		this.lessionName = lessionName;
	}

	public String getTopicName() {
		return topicName;
	}

	public void setTopicName(String topicName) {
		this.topicName = topicName;
	}

	@Override
	public String toString() {
		return "AdminEntity [id=" + id + ", studClass=" + studClass + ", chapterName=" + chapterName + ", lessionName="
				+ lessionName + ", topicName=" + topicName + "]";
	}

	public AdminEntity(Long id, String studClass, String chapterName, String lessionName, String topicName) {
		super();
		this.id = id;
		this.studClass = studClass;
		this.chapterName = chapterName;
		this.lessionName = lessionName;
		this.topicName = topicName;
	}

	public AdminEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	

}
