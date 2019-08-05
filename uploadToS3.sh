check_env_vars() {	
	if [ -z ${BUCKETNAME+x} ]; then
		echo "no bucketname provided" 1>&2
		exit 1
	fi
}
configure_aws_cli(){
	aws --version
	aws configure set default.region eu-central-1
	aws configure set default.output json
}
upload_file_to_s3() {
    aws s3 cp index.html s3://$BUCKETNAME/index.html
    aws s3 cp dist/ s3://$BUCKETNAME/dist/ --recursive
}

check_env_vars
configure_aws_cli
upload_file_to_s3
