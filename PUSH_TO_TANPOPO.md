# tanpopo鯖へgit push

1.~/.ssh/configに以下を作成or追記
-------------------------------------------

	Host tanpopo.ws
		HostName tanpopo.ws
		IdentityFile ~/.ssh/tanpopo  #鍵はonomotoharuにもらってね	
		User tanpopo
		Port #ポート番号,onomotoharuに聞いてね



2.remoteにたんぽぽ鯖を追加
-------------------------------------------
	$ git remote add deploy ssh://tanpopo.ws:#{ポート番号}/~/tanpopo.ws.git


以上。