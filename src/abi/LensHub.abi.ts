export const ABI_JSON = [
    {
        "type": "constructor",
        "stateMutability": "undefined",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "followNFTImpl"
            },
            {
                "type": "address",
                "name": "collectNFTImpl"
            }
        ]
    },
    {
        "type": "error",
        "name": "CallerNotCollectNFT",
        "inputs": []
    },
    {
        "type": "error",
        "name": "CallerNotFollowNFT",
        "inputs": []
    },
    {
        "type": "error",
        "name": "CannotInitImplementation",
        "inputs": []
    },
    {
        "type": "error",
        "name": "Initialized",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NotGovernance",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NotGovernanceOrEmergencyAdmin",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NotOwnerOrApproved",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NotProfileOwner",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NotProfileOwnerOrDispatcher",
        "inputs": []
    },
    {
        "type": "error",
        "name": "Paused",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ProfileCreatorNotWhitelisted",
        "inputs": []
    },
    {
        "type": "error",
        "name": "PublicationDoesNotExist",
        "inputs": []
    },
    {
        "type": "error",
        "name": "PublishingPaused",
        "inputs": []
    },
    {
        "type": "error",
        "name": "SignatureExpired",
        "inputs": []
    },
    {
        "type": "error",
        "name": "SignatureInvalid",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ZeroSpender",
        "inputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Approval",
        "inputs": [
            {
                "type": "address",
                "name": "owner",
                "indexed": true
            },
            {
                "type": "address",
                "name": "approved",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "tokenId",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ApprovalForAll",
        "inputs": [
            {
                "type": "address",
                "name": "owner",
                "indexed": true
            },
            {
                "type": "address",
                "name": "operator",
                "indexed": true
            },
            {
                "type": "bool",
                "name": "approved",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Transfer",
        "inputs": [
            {
                "type": "address",
                "name": "from",
                "indexed": true
            },
            {
                "type": "address",
                "name": "to",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "tokenId",
                "indexed": true
            }
        ]
    },
    {
        "type": "function",
        "name": "approve",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "balanceOf",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "owner"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "burn",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "burnWithSig",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "tuple",
                "name": "sig",
                "components": [
                    {
                        "type": "uint8",
                        "name": "v"
                    },
                    {
                        "type": "bytes32",
                        "name": "r"
                    },
                    {
                        "type": "bytes32",
                        "name": "s"
                    },
                    {
                        "type": "uint256",
                        "name": "deadline"
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "collect",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId"
            },
            {
                "type": "uint256",
                "name": "pubId"
            },
            {
                "type": "bytes",
                "name": "data"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "collectWithSig",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "vars",
                "components": [
                    {
                        "type": "address",
                        "name": "collector"
                    },
                    {
                        "type": "uint256",
                        "name": "profileId"
                    },
                    {
                        "type": "uint256",
                        "name": "pubId"
                    },
                    {
                        "type": "bytes",
                        "name": "data"
                    },
                    {
                        "type": "tuple",
                        "name": "sig",
                        "components": [
                            {
                                "type": "uint8",
                                "name": "v"
                            },
                            {
                                "type": "bytes32",
                                "name": "r"
                            },
                            {
                                "type": "bytes32",
                                "name": "s"
                            },
                            {
                                "type": "uint256",
                                "name": "deadline"
                            }
                        ]
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "comment",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "vars",
                "components": [
                    {
                        "type": "uint256",
                        "name": "profileId"
                    },
                    {
                        "type": "string",
                        "name": "contentURI"
                    },
                    {
                        "type": "uint256",
                        "name": "profileIdPointed"
                    },
                    {
                        "type": "uint256",
                        "name": "pubIdPointed"
                    },
                    {
                        "type": "address",
                        "name": "collectModule"
                    },
                    {
                        "type": "bytes",
                        "name": "collectModuleData"
                    },
                    {
                        "type": "address",
                        "name": "referenceModule"
                    },
                    {
                        "type": "bytes",
                        "name": "referenceModuleData"
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "commentWithSig",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "vars",
                "components": [
                    {
                        "type": "uint256",
                        "name": "profileId"
                    },
                    {
                        "type": "string",
                        "name": "contentURI"
                    },
                    {
                        "type": "uint256",
                        "name": "profileIdPointed"
                    },
                    {
                        "type": "uint256",
                        "name": "pubIdPointed"
                    },
                    {
                        "type": "address",
                        "name": "collectModule"
                    },
                    {
                        "type": "bytes",
                        "name": "collectModuleData"
                    },
                    {
                        "type": "address",
                        "name": "referenceModule"
                    },
                    {
                        "type": "bytes",
                        "name": "referenceModuleData"
                    },
                    {
                        "type": "tuple",
                        "name": "sig",
                        "components": [
                            {
                                "type": "uint8",
                                "name": "v"
                            },
                            {
                                "type": "bytes32",
                                "name": "r"
                            },
                            {
                                "type": "bytes32",
                                "name": "s"
                            },
                            {
                                "type": "uint256",
                                "name": "deadline"
                            }
                        ]
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "createProfile",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "vars",
                "components": [
                    {
                        "type": "address",
                        "name": "to"
                    },
                    {
                        "type": "string",
                        "name": "handle"
                    },
                    {
                        "type": "string",
                        "name": "imageURI"
                    },
                    {
                        "type": "address",
                        "name": "followModule"
                    },
                    {
                        "type": "bytes",
                        "name": "followModuleData"
                    },
                    {
                        "type": "string",
                        "name": "followNFTURI"
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "emitCollectNFTTransferEvent",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId"
            },
            {
                "type": "uint256",
                "name": "pubId"
            },
            {
                "type": "uint256",
                "name": "collectNFTId"
            },
            {
                "type": "address",
                "name": "from"
            },
            {
                "type": "address",
                "name": "to"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "emitFollowNFTTransferEvent",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId"
            },
            {
                "type": "uint256",
                "name": "followNFTId"
            },
            {
                "type": "address",
                "name": "from"
            },
            {
                "type": "address",
                "name": "to"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "follow",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256[]",
                "name": "profileIds"
            },
            {
                "type": "bytes[]",
                "name": "datas"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "followWithSig",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "vars",
                "components": [
                    {
                        "type": "address",
                        "name": "follower"
                    },
                    {
                        "type": "uint256[]",
                        "name": "profileIds"
                    },
                    {
                        "type": "bytes[]",
                        "name": "datas"
                    },
                    {
                        "type": "tuple",
                        "name": "sig",
                        "components": [
                            {
                                "type": "uint8",
                                "name": "v"
                            },
                            {
                                "type": "bytes32",
                                "name": "r"
                            },
                            {
                                "type": "bytes32",
                                "name": "s"
                            },
                            {
                                "type": "uint256",
                                "name": "deadline"
                            }
                        ]
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getApproved",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getCollectModule",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId"
            },
            {
                "type": "uint256",
                "name": "pubId"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getCollectNFT",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId"
            },
            {
                "type": "uint256",
                "name": "pubId"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getContentURI",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId"
            },
            {
                "type": "uint256",
                "name": "pubId"
            }
        ],
        "outputs": [
            {
                "type": "string",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getDispatcher",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getDomainSeparator",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getFollowModule",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getFollowNFT",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getFollowNFTURI",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId"
            }
        ],
        "outputs": [
            {
                "type": "string",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getGovernance",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getHandle",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId"
            }
        ],
        "outputs": [
            {
                "type": "string",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getProfile",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "",
                "components": [
                    {
                        "type": "uint256",
                        "name": "pubCount"
                    },
                    {
                        "type": "address",
                        "name": "followModule"
                    },
                    {
                        "type": "address",
                        "name": "followNFT"
                    },
                    {
                        "type": "string",
                        "name": "handle"
                    },
                    {
                        "type": "string",
                        "name": "imageURI"
                    },
                    {
                        "type": "string",
                        "name": "followNFTURI"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getProfileIdByHandle",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": "handle"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getPub",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId"
            },
            {
                "type": "uint256",
                "name": "pubId"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "",
                "components": [
                    {
                        "type": "uint256",
                        "name": "profileIdPointed"
                    },
                    {
                        "type": "uint256",
                        "name": "pubIdPointed"
                    },
                    {
                        "type": "string",
                        "name": "contentURI"
                    },
                    {
                        "type": "address",
                        "name": "referenceModule"
                    },
                    {
                        "type": "address",
                        "name": "collectModule"
                    },
                    {
                        "type": "address",
                        "name": "collectNFT"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getPubCount",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getPubPointer",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId"
            },
            {
                "type": "uint256",
                "name": "pubId"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            },
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getPubType",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId"
            },
            {
                "type": "uint256",
                "name": "pubId"
            }
        ],
        "outputs": [
            {
                "type": "uint8",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getReferenceModule",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId"
            },
            {
                "type": "uint256",
                "name": "pubId"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getState",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint8",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "initialize",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": "name"
            },
            {
                "type": "string",
                "name": "symbol"
            },
            {
                "type": "address",
                "name": "newGovernance"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "isApprovedForAll",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "owner"
            },
            {
                "type": "address",
                "name": "operator"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "isCollectModuleWhitelisted",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "collectModule"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "isFollowModuleWhitelisted",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "followModule"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "isProfileCreatorWhitelisted",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "profileCreator"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "isReferenceModuleWhitelisted",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "referenceModule"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "mintTimestampOf",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "mirror",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "vars",
                "components": [
                    {
                        "type": "uint256",
                        "name": "profileId"
                    },
                    {
                        "type": "uint256",
                        "name": "profileIdPointed"
                    },
                    {
                        "type": "uint256",
                        "name": "pubIdPointed"
                    },
                    {
                        "type": "address",
                        "name": "referenceModule"
                    },
                    {
                        "type": "bytes",
                        "name": "referenceModuleData"
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "mirrorWithSig",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "vars",
                "components": [
                    {
                        "type": "uint256",
                        "name": "profileId"
                    },
                    {
                        "type": "uint256",
                        "name": "profileIdPointed"
                    },
                    {
                        "type": "uint256",
                        "name": "pubIdPointed"
                    },
                    {
                        "type": "address",
                        "name": "referenceModule"
                    },
                    {
                        "type": "bytes",
                        "name": "referenceModuleData"
                    },
                    {
                        "type": "tuple",
                        "name": "sig",
                        "components": [
                            {
                                "type": "uint8",
                                "name": "v"
                            },
                            {
                                "type": "bytes32",
                                "name": "r"
                            },
                            {
                                "type": "bytes32",
                                "name": "s"
                            },
                            {
                                "type": "uint256",
                                "name": "deadline"
                            }
                        ]
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "name",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "string",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "ownerOf",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "permit",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "spender"
            },
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "tuple",
                "name": "sig",
                "components": [
                    {
                        "type": "uint8",
                        "name": "v"
                    },
                    {
                        "type": "bytes32",
                        "name": "r"
                    },
                    {
                        "type": "bytes32",
                        "name": "s"
                    },
                    {
                        "type": "uint256",
                        "name": "deadline"
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "permitForAll",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "owner"
            },
            {
                "type": "address",
                "name": "operator"
            },
            {
                "type": "bool",
                "name": "approved"
            },
            {
                "type": "tuple",
                "name": "sig",
                "components": [
                    {
                        "type": "uint8",
                        "name": "v"
                    },
                    {
                        "type": "bytes32",
                        "name": "r"
                    },
                    {
                        "type": "bytes32",
                        "name": "s"
                    },
                    {
                        "type": "uint256",
                        "name": "deadline"
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "post",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "vars",
                "components": [
                    {
                        "type": "uint256",
                        "name": "profileId"
                    },
                    {
                        "type": "string",
                        "name": "contentURI"
                    },
                    {
                        "type": "address",
                        "name": "collectModule"
                    },
                    {
                        "type": "bytes",
                        "name": "collectModuleData"
                    },
                    {
                        "type": "address",
                        "name": "referenceModule"
                    },
                    {
                        "type": "bytes",
                        "name": "referenceModuleData"
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "postWithSig",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "vars",
                "components": [
                    {
                        "type": "uint256",
                        "name": "profileId"
                    },
                    {
                        "type": "string",
                        "name": "contentURI"
                    },
                    {
                        "type": "address",
                        "name": "collectModule"
                    },
                    {
                        "type": "bytes",
                        "name": "collectModuleData"
                    },
                    {
                        "type": "address",
                        "name": "referenceModule"
                    },
                    {
                        "type": "bytes",
                        "name": "referenceModuleData"
                    },
                    {
                        "type": "tuple",
                        "name": "sig",
                        "components": [
                            {
                                "type": "uint8",
                                "name": "v"
                            },
                            {
                                "type": "bytes32",
                                "name": "r"
                            },
                            {
                                "type": "bytes32",
                                "name": "s"
                            },
                            {
                                "type": "uint256",
                                "name": "deadline"
                            }
                        ]
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "safeTransferFrom",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "from"
            },
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "safeTransferFrom",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "from"
            },
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "bytes",
                "name": "_data"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setApprovalForAll",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "operator"
            },
            {
                "type": "bool",
                "name": "approved"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setDispatcher",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId"
            },
            {
                "type": "address",
                "name": "dispatcher"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setDispatcherWithSig",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "vars",
                "components": [
                    {
                        "type": "uint256",
                        "name": "profileId"
                    },
                    {
                        "type": "address",
                        "name": "dispatcher"
                    },
                    {
                        "type": "tuple",
                        "name": "sig",
                        "components": [
                            {
                                "type": "uint8",
                                "name": "v"
                            },
                            {
                                "type": "bytes32",
                                "name": "r"
                            },
                            {
                                "type": "bytes32",
                                "name": "s"
                            },
                            {
                                "type": "uint256",
                                "name": "deadline"
                            }
                        ]
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setEmergencyAdmin",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "newEmergencyAdmin"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setFollowModule",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId"
            },
            {
                "type": "address",
                "name": "followModule"
            },
            {
                "type": "bytes",
                "name": "followModuleData"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setFollowModuleWithSig",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "vars",
                "components": [
                    {
                        "type": "uint256",
                        "name": "profileId"
                    },
                    {
                        "type": "address",
                        "name": "followModule"
                    },
                    {
                        "type": "bytes",
                        "name": "followModuleData"
                    },
                    {
                        "type": "tuple",
                        "name": "sig",
                        "components": [
                            {
                                "type": "uint8",
                                "name": "v"
                            },
                            {
                                "type": "bytes32",
                                "name": "r"
                            },
                            {
                                "type": "bytes32",
                                "name": "s"
                            },
                            {
                                "type": "uint256",
                                "name": "deadline"
                            }
                        ]
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setFollowNFTURI",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId"
            },
            {
                "type": "string",
                "name": "followNFTURI"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setFollowNFTURIWithSig",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "vars",
                "components": [
                    {
                        "type": "uint256",
                        "name": "profileId"
                    },
                    {
                        "type": "string",
                        "name": "followNFTURI"
                    },
                    {
                        "type": "tuple",
                        "name": "sig",
                        "components": [
                            {
                                "type": "uint8",
                                "name": "v"
                            },
                            {
                                "type": "bytes32",
                                "name": "r"
                            },
                            {
                                "type": "bytes32",
                                "name": "s"
                            },
                            {
                                "type": "uint256",
                                "name": "deadline"
                            }
                        ]
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setGovernance",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "newGovernance"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setProfileImageURI",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId"
            },
            {
                "type": "string",
                "name": "imageURI"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setProfileImageURIWithSig",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "vars",
                "components": [
                    {
                        "type": "uint256",
                        "name": "profileId"
                    },
                    {
                        "type": "string",
                        "name": "imageURI"
                    },
                    {
                        "type": "tuple",
                        "name": "sig",
                        "components": [
                            {
                                "type": "uint8",
                                "name": "v"
                            },
                            {
                                "type": "bytes32",
                                "name": "r"
                            },
                            {
                                "type": "bytes32",
                                "name": "s"
                            },
                            {
                                "type": "uint256",
                                "name": "deadline"
                            }
                        ]
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setState",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint8",
                "name": "newState"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "sigNonces",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "supportsInterface",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes4",
                "name": "interfaceId"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "symbol",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "string",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "tokenByIndex",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "index"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "tokenDataOf",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "",
                "components": [
                    {
                        "type": "address",
                        "name": "owner"
                    },
                    {
                        "type": "uint96",
                        "name": "mintTimestamp"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "tokenOfOwnerByIndex",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "owner"
            },
            {
                "type": "uint256",
                "name": "index"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "tokenURI",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": [
            {
                "type": "string",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "totalSupply",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "transferFrom",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "from"
            },
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "whitelistCollectModule",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "collectModule"
            },
            {
                "type": "bool",
                "name": "whitelist"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "whitelistFollowModule",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "followModule"
            },
            {
                "type": "bool",
                "name": "whitelist"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "whitelistProfileCreator",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "profileCreator"
            },
            {
                "type": "bool",
                "name": "whitelist"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "whitelistReferenceModule",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "referenceModule"
            },
            {
                "type": "bool",
                "name": "whitelist"
            }
        ],
        "outputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "BaseInitialized",
        "inputs": [
            {
                "type": "string",
                "name": "name",
                "indexed": false
            },
            {
                "type": "string",
                "name": "symbol",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "CollectModuleWhitelisted",
        "inputs": [
            {
                "type": "address",
                "name": "collectModule",
                "indexed": true
            },
            {
                "type": "bool",
                "name": "whitelisted",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "CollectNFTDeployed",
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "pubId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "collectNFT",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "CollectNFTInitialized",
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "pubId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "CollectNFTTransferred",
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "pubId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "collectNFTId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "from",
                "indexed": false
            },
            {
                "type": "address",
                "name": "to",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "DefaultProfileSet",
        "inputs": [
            {
                "type": "address",
                "name": "wallet",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "profileId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Collected",
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "followNFTId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "from",
                "indexed": false
            },
            {
                "type": "address",
                "name": "to",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "CommentCreated",
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "pubId",
                "indexed": true
            },
            {
                "type": "string",
                "name": "contentURI",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "profileIdPointed",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "pubIdPointed",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "referenceModuleData",
                "indexed": false
            },
            {
                "type": "address",
                "name": "collectModule",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "collectModuleReturnData",
                "indexed": false
            },
            {
                "type": "address",
                "name": "referenceModule",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "referenceModuleReturnData",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "DispatcherSet",
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "dispatcher",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "EmergencyAdminSet",
        "inputs": [
            {
                "type": "address",
                "name": "caller",
                "indexed": true
            },
            {
                "type": "address",
                "name": "oldEmergencyAdmin",
                "indexed": true
            },
            {
                "type": "address",
                "name": "newEmergencyAdmin",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "FeeModuleBaseConstructed",
        "inputs": [
            {
                "type": "address",
                "name": "moduleGlobals",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "FollowModuleSet",
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "followModule",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "followModuleReturnData",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "FollowModuleWhitelisted",
        "inputs": [
            {
                "type": "address",
                "name": "followModule",
                "indexed": true
            },
            {
                "type": "bool",
                "name": "whitelisted",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "FollowNFTDelegatedPowerChanged",
        "inputs": [
            {
                "type": "address",
                "name": "delegate",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "newPower",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "FollowNFTDeployed",
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "followNFT",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "FollowNFTInitialized",
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "FollowNFTTransferred",
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "followNFTId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "from",
                "indexed": false
            },
            {
                "type": "address",
                "name": "to",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "FollowNFTURISet",
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId",
                "indexed": true
            },
            {
                "type": "string",
                "name": "followNFTURI",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Followed",
        "inputs": [
            {
                "type": "address",
                "name": "follower",
                "indexed": true
            },
            {
                "type": "uint256[]",
                "name": "profileIds"
            },
            {
                "type": "bytes[]",
                "name": "followModuleDatas"
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "FollowsApproved",
        "inputs": [
            {
                "type": "address",
                "name": "owner",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "profileId",
                "indexed": true
            },
            {
                "type": "address[]",
                "name": "addresses"
            },
            {
                "type": "bool[]",
                "name": "approved"
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "GovernanceSet",
        "inputs": [
            {
                "type": "address",
                "name": "caller",
                "indexed": true
            },
            {
                "type": "address",
                "name": "prevGovernance",
                "indexed": true
            },
            {
                "type": "address",
                "name": "newGovernance",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "MirrorCreated",
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "pubId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "profileIdPointed",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "pubIdPointed",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "referenceModuleData",
                "indexed": false
            },
            {
                "type": "address",
                "name": "referenceModule",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "referenceModuleReturnData",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ModuleBaseConstructed",
        "inputs": [
            {
                "type": "address",
                "name": "hub",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ModuleGlobalsCurrencyWhitelisted",
        "inputs": [
            {
                "type": "address",
                "name": "currency",
                "indexed": true
            },
            {
                "type": "bool",
                "name": "prevWhitelisted",
                "indexed": true
            },
            {
                "type": "bool",
                "name": "whitelisted",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ModuleGlobalsGovernanceSet",
        "inputs": [
            {
                "type": "address",
                "name": "prevGovernance",
                "indexed": true
            },
            {
                "type": "address",
                "name": "newGovernance",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ModuleGlobalsTreasuryFeeSet",
        "inputs": [
            {
                "type": "uint16",
                "name": "prevTreasuryFee",
                "indexed": true
            },
            {
                "type": "uint16",
                "name": "newTreasuryFee",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ModuleGlobalsTreasurySet",
        "inputs": [
            {
                "type": "address",
                "name": "prevTreasury",
                "indexed": true
            },
            {
                "type": "address",
                "name": "newTreasury",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "PostCreated",
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "pubId",
                "indexed": true
            },
            {
                "type": "string",
                "name": "contentURI",
                "indexed": false
            },
            {
                "type": "address",
                "name": "collectModule",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "collectModuleReturnData",
                "indexed": false
            },
            {
                "type": "address",
                "name": "referenceModule",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "referenceModuleReturnData",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ProfileCreated",
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "creator",
                "indexed": true
            },
            {
                "type": "address",
                "name": "to",
                "indexed": true
            },
            {
                "type": "string",
                "name": "handle",
                "indexed": false
            },
            {
                "type": "string",
                "name": "imageURI",
                "indexed": false
            },
            {
                "type": "address",
                "name": "followModule",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "followModuleReturnData",
                "indexed": false
            },
            {
                "type": "string",
                "name": "followNFTURI",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ProfileCreatorWhitelisted",
        "inputs": [
            {
                "type": "address",
                "name": "profileCreator",
                "indexed": true
            },
            {
                "type": "bool",
                "name": "whitelisted",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ProfileImageURISet",
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId",
                "indexed": true
            },
            {
                "type": "string",
                "name": "imageURI",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ReferenceModuleWhitelisted",
        "inputs": [
            {
                "type": "address",
                "name": "referenceModule",
                "indexed": true
            },
            {
                "type": "bool",
                "name": "whitelisted",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "StateSet",
        "inputs": [
            {
                "type": "address",
                "name": "caller",
                "indexed": true
            },
            {
                "type": "uint8",
                "name": "prevState",
                "indexed": true
            },
            {
                "type": "uint8",
                "name": "newState",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    }
]
