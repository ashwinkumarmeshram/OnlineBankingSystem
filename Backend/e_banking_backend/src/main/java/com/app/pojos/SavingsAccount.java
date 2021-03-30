package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "savingsAccount")
public class SavingsAccount {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="account_id")
	 //@NotBlank(message = "account id must not be empty")
	private int accountId;
	@Column(unique = true)
	 @NotBlank(message = "account number must not be empty")
	private int accountNumber;
	 @NotBlank(message = "account balance must not be empty")
	private Double accountBalance;
	 @NotBlank(message = "cinf must not be empty")
	private Long cifNo;
	 @NotBlank(message = "branch name  must not be empty")
	private String branchName;
	 @NotBlank(message = "ifsc must not be empty")
	private Long ifscCode;
	private byte isNetBankingActive=0;
	
	@OneToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
	@JoinColumn(name="customerId")
	private Customer customer;

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "savingsAccountId")
	private List<SavingsTransaction> savingsTransactionList=new ArrayList<SavingsTransaction>();

	
	public int getAccountNumber() {
		return accountNumber;
	}

	public SavingsAccount() {
		
	}

	public SavingsAccount(int accountNumber, String branchName, Long ifscCode) {
		
		this.accountNumber = accountNumber;
		this.branchName = branchName;
		this.ifscCode = ifscCode;
	}

	public SavingsAccount(int accountNumber, Double accountBalance, Long cifNo, String branchName, Long ifscCode,
			byte isNetBankingActive) {
		
		this.accountNumber = accountNumber;
		this.accountBalance = accountBalance;
		this.cifNo = cifNo;
		this.branchName = branchName;
		this.ifscCode = ifscCode;
		this.isNetBankingActive = isNetBankingActive;
	}
	
	
	public SavingsAccount(int accountId, int accountNumber, Double accountBalance, Long cifNo, String branchName,
			Long ifscCode, Customer customer) {
		
		this.accountId = accountId;
		this.accountNumber = accountNumber;
		this.accountBalance = accountBalance;
		this.cifNo = cifNo;
		this.branchName = branchName;
		this.ifscCode = ifscCode;
		this.customer = customer;
	}

	public SavingsAccount(int accountId, int accountNumber, Double accountBalance, Long cifNo, String branchName,
			Long ifscCode, byte isNetBankingActive, Customer customer,
			List<SavingsTransaction> savingsTransactionList) {
		
		this.accountId = accountId;
		this.accountNumber = accountNumber;
		this.accountBalance = accountBalance;
		this.cifNo = cifNo;
		this.branchName = branchName;
		this.ifscCode = ifscCode;
		this.isNetBankingActive = isNetBankingActive;
		this.customer = customer;
		this.savingsTransactionList = savingsTransactionList;
	}

	public int getAccountId() {
		return accountId;
	}

	public void setAccountId(int accountId) {
		this.accountId = accountId;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public void setAccountNumber(int accountNumber) {
		this.accountNumber = accountNumber;
	}
	public Double getAccountBalance() {
		return accountBalance;
	}
	public void setAccountBalance(Double accountBalance) {
		this.accountBalance = accountBalance;
	}
	public Long getCifNo() {
		return cifNo;
	}
	public void setCifNo(Long cifNo) {
		this.cifNo = cifNo;
	}
	public String getBranchName() {
		return branchName;
	}
	public void setBranchName(String branchName) {
		this.branchName = branchName;
	}
	public Long getIfscCode() {
		return ifscCode;
	}
	public void setIfscCode(Long ifscCode) {
		this.ifscCode = ifscCode;
	}
	public byte getIsNetBankingActive() {
		return isNetBankingActive;
	}
	public void setIsNetBankingActive(byte isNetBankingActive) {
		this.isNetBankingActive = isNetBankingActive;
	}

	public List<SavingsTransaction> getSavingsTransactionList() {
		return savingsTransactionList;
	}
	public void setSavingsTransactionList(List<SavingsTransaction> savingsTransactionList) {
		this.savingsTransactionList = savingsTransactionList;
	}
	
	public void addTransaction(SavingsTransaction transaction)
	{
		this.savingsTransactionList.add(transaction);
	}
	@Override
	public String toString() {
		return "SavingsAccount [accountNumber=" + accountNumber + ", accountBalance=" + accountBalance + ", cifNo="
				+ cifNo + ", branchName=" + branchName + ", ifscCode=" + ifscCode + ", isNetBankingActive="
				+ isNetBankingActive + "]";
	}
}
