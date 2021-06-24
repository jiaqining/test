function delpic(linka) {
			if (confirm("确定要删除这张照片吗?")) {
				var linode = linka.parentNode;
				var ulnode = linode.parentNode;
				ulnode.removeChild(linode);
			} 
		}