// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: sampleModule/tx.proto

package types

import (
	context "context"
	fmt "fmt"
	grpc1 "github.com/gogo/protobuf/grpc"
	proto "github.com/gogo/protobuf/proto"
	grpc "google.golang.org/grpc"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

func init() { proto.RegisterFile("sampleModule/tx.proto", fileDescriptor_e331ba686ae81c9d) }

var fileDescriptor_e331ba686ae81c9d = []byte{
	// 151 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x12, 0x2d, 0x4e, 0xcc, 0x2d,
	0xc8, 0x49, 0xf5, 0xcd, 0x4f, 0x29, 0xcd, 0x49, 0xd5, 0x2f, 0xa9, 0xd0, 0x2b, 0x28, 0xca, 0x2f,
	0xc9, 0x17, 0xd2, 0x89, 0x4c, 0x2c, 0x2e, 0xcd, 0xcb, 0x2f, 0xca, 0xf4, 0x75, 0x0c, 0x09, 0x0e,
	0xf5, 0xf7, 0x76, 0xd4, 0x2b, 0x29, 0xaa, 0x4c, 0xce, 0x2f, 0xce, 0xcd, 0x2f, 0x4e, 0xce, 0x48,
	0xcc, 0xcc, 0xd3, 0x43, 0xd6, 0x66, 0xc4, 0xca, 0xc5, 0xec, 0x5b, 0x9c, 0xee, 0x14, 0x79, 0xe2,
	0x91, 0x1c, 0xe3, 0x85, 0x47, 0x72, 0x8c, 0x0f, 0x1e, 0xc9, 0x31, 0x4e, 0x78, 0x2c, 0xc7, 0x70,
	0xe1, 0xb1, 0x1c, 0xc3, 0x8d, 0xc7, 0x72, 0x0c, 0x51, 0xf6, 0xe9, 0x99, 0x25, 0x19, 0xa5, 0x49,
	0x7a, 0xc9, 0xf9, 0xb9, 0xfa, 0xe8, 0x26, 0xeb, 0xa3, 0x9a, 0xac, 0x5f, 0xa1, 0x8f, 0xea, 0xa4,
	0xca, 0x82, 0xd4, 0xe2, 0x24, 0x36, 0xb0, 0xb3, 0x8c, 0x01, 0x01, 0x00, 0x00, 0xff, 0xff, 0x9f,
	0xe0, 0x12, 0xca, 0xaf, 0x00, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// MsgClient is the client API for Msg service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type MsgClient interface {
}

type msgClient struct {
	cc grpc1.ClientConn
}

func NewMsgClient(cc grpc1.ClientConn) MsgClient {
	return &msgClient{cc}
}

// MsgServer is the server API for Msg service.
type MsgServer interface {
}

// UnimplementedMsgServer can be embedded to have forward compatible implementations.
type UnimplementedMsgServer struct {
}

func RegisterMsgServer(s grpc1.Server, srv MsgServer) {
	s.RegisterService(&_Msg_serviceDesc, srv)
}

var _Msg_serviceDesc = grpc.ServiceDesc{
	ServiceName: "YasunoriMATSUOKA.trycosmoschain.sampleModule.Msg",
	HandlerType: (*MsgServer)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams:     []grpc.StreamDesc{},
	Metadata:    "sampleModule/tx.proto",
}
