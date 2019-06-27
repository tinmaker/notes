#!/usr/bin/python
#coding: utf-8

import time

class px4():
	"""docstring for px4"""
	def __init__(self):
		self.datalinks = \
		{\
		0:["PIXHAWK飞控最新控制部分源码详解与分析(v 1.8.0)", "https://blog.csdn.net/lookije/article/details/82891266"],\
		1:["pixhawk commander.cpp的飞行模式切换解读", "https://blog.csdn.net/czyv587/article/details/51777392"],\
		2:["Pixhawk-姿态解算-互补滤波,pid", "https://blog.csdn.net/csshuke/article/details/78952911"],\
		3:["px4 log分析软件安装", "https://blog.csdn.net/spurmoon/article/details/85305517"],\
		4:["px4官网教程中文翻译", "https://www.ncnynl.com/archives/201709/2059.html"],\
		5:["PX4飞控之导航及任务架构", "https://blog.csdn.net/csshuke/article/details/78853157"],\
		6:["", ""],\
		}		
		self.vins_datalinks = \
		{\
		0:["VINS技术路线与代码详解", "https://blog.csdn.net/wangshuailpp/article/details/78461171"],\
		1:["", ""],\
		}	
	def show(self):
		for k in range(len(self.datalinks)):
			print k , self.datalinks[k][0], "  ", self.datalinks[k][1]


def main():
	px4_links = px4()
	px4_links.show()
	pass
	time.sleep(1)

if __name__ == '__main__':
	main()