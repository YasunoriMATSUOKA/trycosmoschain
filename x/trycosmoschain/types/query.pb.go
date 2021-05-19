// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: trycosmoschain/query.proto

package types

import (
	context "context"
	fmt "fmt"
	query "github.com/cosmos/cosmos-sdk/types/query"
	grpc1 "github.com/gogo/protobuf/grpc"
	proto "github.com/gogo/protobuf/proto"
	_ "google.golang.org/genproto/googleapis/api/annotations"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	io "io"
	math "math"
	math_bits "math/bits"
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

// this line is used by starport scaffolding # 3
type QueryGetSampleTypeRequest struct {
	Id uint64 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (m *QueryGetSampleTypeRequest) Reset()         { *m = QueryGetSampleTypeRequest{} }
func (m *QueryGetSampleTypeRequest) String() string { return proto.CompactTextString(m) }
func (*QueryGetSampleTypeRequest) ProtoMessage()    {}
func (*QueryGetSampleTypeRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_6779bbec4c1b2256, []int{0}
}
func (m *QueryGetSampleTypeRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryGetSampleTypeRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryGetSampleTypeRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryGetSampleTypeRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryGetSampleTypeRequest.Merge(m, src)
}
func (m *QueryGetSampleTypeRequest) XXX_Size() int {
	return m.Size()
}
func (m *QueryGetSampleTypeRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryGetSampleTypeRequest.DiscardUnknown(m)
}

var xxx_messageInfo_QueryGetSampleTypeRequest proto.InternalMessageInfo

func (m *QueryGetSampleTypeRequest) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

type QueryGetSampleTypeResponse struct {
	SampleType *SampleType `protobuf:"bytes,1,opt,name=SampleType,proto3" json:"SampleType,omitempty"`
}

func (m *QueryGetSampleTypeResponse) Reset()         { *m = QueryGetSampleTypeResponse{} }
func (m *QueryGetSampleTypeResponse) String() string { return proto.CompactTextString(m) }
func (*QueryGetSampleTypeResponse) ProtoMessage()    {}
func (*QueryGetSampleTypeResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_6779bbec4c1b2256, []int{1}
}
func (m *QueryGetSampleTypeResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryGetSampleTypeResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryGetSampleTypeResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryGetSampleTypeResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryGetSampleTypeResponse.Merge(m, src)
}
func (m *QueryGetSampleTypeResponse) XXX_Size() int {
	return m.Size()
}
func (m *QueryGetSampleTypeResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryGetSampleTypeResponse.DiscardUnknown(m)
}

var xxx_messageInfo_QueryGetSampleTypeResponse proto.InternalMessageInfo

func (m *QueryGetSampleTypeResponse) GetSampleType() *SampleType {
	if m != nil {
		return m.SampleType
	}
	return nil
}

type QueryAllSampleTypeRequest struct {
	Pagination *query.PageRequest `protobuf:"bytes,1,opt,name=pagination,proto3" json:"pagination,omitempty"`
}

func (m *QueryAllSampleTypeRequest) Reset()         { *m = QueryAllSampleTypeRequest{} }
func (m *QueryAllSampleTypeRequest) String() string { return proto.CompactTextString(m) }
func (*QueryAllSampleTypeRequest) ProtoMessage()    {}
func (*QueryAllSampleTypeRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_6779bbec4c1b2256, []int{2}
}
func (m *QueryAllSampleTypeRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryAllSampleTypeRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryAllSampleTypeRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryAllSampleTypeRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryAllSampleTypeRequest.Merge(m, src)
}
func (m *QueryAllSampleTypeRequest) XXX_Size() int {
	return m.Size()
}
func (m *QueryAllSampleTypeRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryAllSampleTypeRequest.DiscardUnknown(m)
}

var xxx_messageInfo_QueryAllSampleTypeRequest proto.InternalMessageInfo

func (m *QueryAllSampleTypeRequest) GetPagination() *query.PageRequest {
	if m != nil {
		return m.Pagination
	}
	return nil
}

type QueryAllSampleTypeResponse struct {
	SampleType []*SampleType       `protobuf:"bytes,1,rep,name=SampleType,proto3" json:"SampleType,omitempty"`
	Pagination *query.PageResponse `protobuf:"bytes,2,opt,name=pagination,proto3" json:"pagination,omitempty"`
}

func (m *QueryAllSampleTypeResponse) Reset()         { *m = QueryAllSampleTypeResponse{} }
func (m *QueryAllSampleTypeResponse) String() string { return proto.CompactTextString(m) }
func (*QueryAllSampleTypeResponse) ProtoMessage()    {}
func (*QueryAllSampleTypeResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_6779bbec4c1b2256, []int{3}
}
func (m *QueryAllSampleTypeResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryAllSampleTypeResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryAllSampleTypeResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryAllSampleTypeResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryAllSampleTypeResponse.Merge(m, src)
}
func (m *QueryAllSampleTypeResponse) XXX_Size() int {
	return m.Size()
}
func (m *QueryAllSampleTypeResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryAllSampleTypeResponse.DiscardUnknown(m)
}

var xxx_messageInfo_QueryAllSampleTypeResponse proto.InternalMessageInfo

func (m *QueryAllSampleTypeResponse) GetSampleType() []*SampleType {
	if m != nil {
		return m.SampleType
	}
	return nil
}

func (m *QueryAllSampleTypeResponse) GetPagination() *query.PageResponse {
	if m != nil {
		return m.Pagination
	}
	return nil
}

func init() {
	proto.RegisterType((*QueryGetSampleTypeRequest)(nil), "YasunoriMATSUOKA.trycosmoschain.trycosmoschain.QueryGetSampleTypeRequest")
	proto.RegisterType((*QueryGetSampleTypeResponse)(nil), "YasunoriMATSUOKA.trycosmoschain.trycosmoschain.QueryGetSampleTypeResponse")
	proto.RegisterType((*QueryAllSampleTypeRequest)(nil), "YasunoriMATSUOKA.trycosmoschain.trycosmoschain.QueryAllSampleTypeRequest")
	proto.RegisterType((*QueryAllSampleTypeResponse)(nil), "YasunoriMATSUOKA.trycosmoschain.trycosmoschain.QueryAllSampleTypeResponse")
}

func init() { proto.RegisterFile("trycosmoschain/query.proto", fileDescriptor_6779bbec4c1b2256) }

var fileDescriptor_6779bbec4c1b2256 = []byte{
	// 420 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0x2a, 0x29, 0xaa, 0x4c,
	0xce, 0x2f, 0xce, 0xcd, 0x2f, 0x4e, 0xce, 0x48, 0xcc, 0xcc, 0xd3, 0x2f, 0x2c, 0x4d, 0x2d, 0xaa,
	0xd4, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0xd2, 0x8b, 0x4c, 0x2c, 0x2e, 0xcd, 0xcb, 0x2f, 0xca,
	0xf4, 0x75, 0x0c, 0x09, 0x0e, 0xf5, 0xf7, 0x76, 0xd4, 0x43, 0x55, 0x8c, 0xc6, 0x95, 0x92, 0x49,
	0xcf, 0xcf, 0x4f, 0xcf, 0x49, 0xd5, 0x4f, 0x2c, 0xc8, 0xd4, 0x4f, 0xcc, 0xcb, 0xcb, 0x2f, 0x49,
	0x2c, 0xc9, 0xcc, 0xcf, 0x2b, 0x86, 0x98, 0x26, 0xa5, 0x05, 0x51, 0xaa, 0x9f, 0x94, 0x58, 0x9c,
	0x0a, 0xb1, 0x46, 0xbf, 0xcc, 0x30, 0x29, 0xb5, 0x24, 0xd1, 0x50, 0xbf, 0x20, 0x31, 0x3d, 0x33,
	0x0f, 0xac, 0x18, 0xaa, 0x56, 0x1e, 0xcd, 0x55, 0xc5, 0x89, 0xb9, 0x05, 0x39, 0xa9, 0x21, 0x95,
	0x05, 0xa9, 0x10, 0x05, 0x4a, 0xda, 0x5c, 0x92, 0x81, 0x20, 0x23, 0xdc, 0x53, 0x4b, 0x82, 0xe1,
	0x72, 0x41, 0xa9, 0x85, 0xa5, 0xa9, 0xc5, 0x25, 0x42, 0x7c, 0x5c, 0x4c, 0x99, 0x29, 0x12, 0x8c,
	0x0a, 0x8c, 0x1a, 0x2c, 0x41, 0x4c, 0x99, 0x29, 0x4a, 0x15, 0x5c, 0x52, 0xd8, 0x14, 0x17, 0x17,
	0xe4, 0xe7, 0x15, 0xa7, 0x0a, 0x45, 0x71, 0x71, 0x21, 0x44, 0xc1, 0xba, 0xb8, 0x8d, 0xac, 0x48,
	0xf4, 0xba, 0x1e, 0x92, 0xb9, 0x48, 0xa6, 0x29, 0x25, 0x43, 0x9d, 0xe9, 0x98, 0x93, 0x83, 0xe9,
	0x4c, 0x37, 0x2e, 0x2e, 0x84, 0xc7, 0xa1, 0x16, 0xab, 0xe9, 0x41, 0x4c, 0xd5, 0x03, 0x85, 0x92,
	0x1e, 0x24, 0x32, 0xa0, 0xa1, 0xa4, 0x17, 0x90, 0x98, 0x0e, 0xd3, 0x1b, 0x84, 0xa4, 0x53, 0xe9,
	0x20, 0x23, 0xd4, 0x7f, 0x68, 0xb6, 0xe0, 0xf0, 0x1f, 0x33, 0xf5, 0xfc, 0x27, 0xe4, 0x8e, 0xe2,
	0x05, 0x26, 0xb0, 0x17, 0xd4, 0x09, 0x7a, 0x01, 0xe2, 0x30, 0x64, 0x3f, 0x18, 0x3d, 0x66, 0xe6,
	0x62, 0x05, 0xfb, 0x41, 0xe8, 0x0d, 0x23, 0xb2, 0x7b, 0x85, 0x3c, 0x49, 0x75, 0x29, 0xce, 0x64,
	0x21, 0xe5, 0x45, 0x0d, 0xa3, 0x20, 0x6e, 0x57, 0x72, 0x6f, 0xba, 0xfc, 0x64, 0x32, 0x93, 0xa3,
	0x90, 0xbd, 0x3e, 0xba, 0x99, 0xfa, 0x68, 0x49, 0x17, 0x67, 0x4a, 0xd6, 0xaf, 0xce, 0x4c, 0xa9,
	0x15, 0x7a, 0xc5, 0xc8, 0xc5, 0x8b, 0x30, 0xdf, 0x31, 0x27, 0x87, 0x4c, 0x1f, 0x63, 0x4b, 0x61,
	0x64, 0xfa, 0x18, 0x6b, 0x32, 0x52, 0x72, 0x02, 0xfb, 0xd8, 0x46, 0xc8, 0x8a, 0x7c, 0x1f, 0x3b,
	0x45, 0x9f, 0x78, 0x24, 0xc7, 0x78, 0xe1, 0x91, 0x1c, 0xe3, 0x83, 0x47, 0x72, 0x8c, 0x13, 0x1e,
	0xcb, 0x31, 0x5c, 0x78, 0x2c, 0xc7, 0x70, 0xe3, 0xb1, 0x1c, 0x43, 0x94, 0x63, 0x7a, 0x66, 0x49,
	0x46, 0x69, 0x92, 0x5e, 0x72, 0x7e, 0x2e, 0x41, 0xf3, 0x2b, 0x30, 0x2c, 0xac, 0x2c, 0x48, 0x2d,
	0x4e, 0x62, 0x03, 0x97, 0x0c, 0xc6, 0x80, 0x00, 0x00, 0x00, 0xff, 0xff, 0x00, 0x89, 0x55, 0x5a,
	0xd2, 0x04, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// QueryClient is the client API for Query service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type QueryClient interface {
	// this line is used by starport scaffolding # 2
	SampleType(ctx context.Context, in *QueryGetSampleTypeRequest, opts ...grpc.CallOption) (*QueryGetSampleTypeResponse, error)
	SampleTypeAll(ctx context.Context, in *QueryAllSampleTypeRequest, opts ...grpc.CallOption) (*QueryAllSampleTypeResponse, error)
}

type queryClient struct {
	cc grpc1.ClientConn
}

func NewQueryClient(cc grpc1.ClientConn) QueryClient {
	return &queryClient{cc}
}

func (c *queryClient) SampleType(ctx context.Context, in *QueryGetSampleTypeRequest, opts ...grpc.CallOption) (*QueryGetSampleTypeResponse, error) {
	out := new(QueryGetSampleTypeResponse)
	err := c.cc.Invoke(ctx, "/YasunoriMATSUOKA.trycosmoschain.trycosmoschain.Query/SampleType", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *queryClient) SampleTypeAll(ctx context.Context, in *QueryAllSampleTypeRequest, opts ...grpc.CallOption) (*QueryAllSampleTypeResponse, error) {
	out := new(QueryAllSampleTypeResponse)
	err := c.cc.Invoke(ctx, "/YasunoriMATSUOKA.trycosmoschain.trycosmoschain.Query/SampleTypeAll", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// QueryServer is the server API for Query service.
type QueryServer interface {
	// this line is used by starport scaffolding # 2
	SampleType(context.Context, *QueryGetSampleTypeRequest) (*QueryGetSampleTypeResponse, error)
	SampleTypeAll(context.Context, *QueryAllSampleTypeRequest) (*QueryAllSampleTypeResponse, error)
}

// UnimplementedQueryServer can be embedded to have forward compatible implementations.
type UnimplementedQueryServer struct {
}

func (*UnimplementedQueryServer) SampleType(ctx context.Context, req *QueryGetSampleTypeRequest) (*QueryGetSampleTypeResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SampleType not implemented")
}
func (*UnimplementedQueryServer) SampleTypeAll(ctx context.Context, req *QueryAllSampleTypeRequest) (*QueryAllSampleTypeResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SampleTypeAll not implemented")
}

func RegisterQueryServer(s grpc1.Server, srv QueryServer) {
	s.RegisterService(&_Query_serviceDesc, srv)
}

func _Query_SampleType_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryGetSampleTypeRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).SampleType(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/YasunoriMATSUOKA.trycosmoschain.trycosmoschain.Query/SampleType",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).SampleType(ctx, req.(*QueryGetSampleTypeRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Query_SampleTypeAll_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryAllSampleTypeRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).SampleTypeAll(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/YasunoriMATSUOKA.trycosmoschain.trycosmoschain.Query/SampleTypeAll",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).SampleTypeAll(ctx, req.(*QueryAllSampleTypeRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _Query_serviceDesc = grpc.ServiceDesc{
	ServiceName: "YasunoriMATSUOKA.trycosmoschain.trycosmoschain.Query",
	HandlerType: (*QueryServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "SampleType",
			Handler:    _Query_SampleType_Handler,
		},
		{
			MethodName: "SampleTypeAll",
			Handler:    _Query_SampleTypeAll_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "trycosmoschain/query.proto",
}

func (m *QueryGetSampleTypeRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryGetSampleTypeRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryGetSampleTypeRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Id != 0 {
		i = encodeVarintQuery(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func (m *QueryGetSampleTypeResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryGetSampleTypeResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryGetSampleTypeResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.SampleType != nil {
		{
			size, err := m.SampleType.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintQuery(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *QueryAllSampleTypeRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryAllSampleTypeRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryAllSampleTypeRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Pagination != nil {
		{
			size, err := m.Pagination.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintQuery(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *QueryAllSampleTypeResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryAllSampleTypeResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryAllSampleTypeResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Pagination != nil {
		{
			size, err := m.Pagination.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintQuery(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x12
	}
	if len(m.SampleType) > 0 {
		for iNdEx := len(m.SampleType) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.SampleType[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintQuery(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0xa
		}
	}
	return len(dAtA) - i, nil
}

func encodeVarintQuery(dAtA []byte, offset int, v uint64) int {
	offset -= sovQuery(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *QueryGetSampleTypeRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Id != 0 {
		n += 1 + sovQuery(uint64(m.Id))
	}
	return n
}

func (m *QueryGetSampleTypeResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.SampleType != nil {
		l = m.SampleType.Size()
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func (m *QueryAllSampleTypeRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Pagination != nil {
		l = m.Pagination.Size()
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func (m *QueryAllSampleTypeResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if len(m.SampleType) > 0 {
		for _, e := range m.SampleType {
			l = e.Size()
			n += 1 + l + sovQuery(uint64(l))
		}
	}
	if m.Pagination != nil {
		l = m.Pagination.Size()
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func sovQuery(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozQuery(x uint64) (n int) {
	return sovQuery(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *QueryGetSampleTypeRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: QueryGetSampleTypeRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryGetSampleTypeRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			m.Id = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Id |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *QueryGetSampleTypeResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: QueryGetSampleTypeResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryGetSampleTypeResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field SampleType", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.SampleType == nil {
				m.SampleType = &SampleType{}
			}
			if err := m.SampleType.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *QueryAllSampleTypeRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: QueryAllSampleTypeRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryAllSampleTypeRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Pagination", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Pagination == nil {
				m.Pagination = &query.PageRequest{}
			}
			if err := m.Pagination.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *QueryAllSampleTypeResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: QueryAllSampleTypeResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryAllSampleTypeResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field SampleType", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.SampleType = append(m.SampleType, &SampleType{})
			if err := m.SampleType[len(m.SampleType)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Pagination", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Pagination == nil {
				m.Pagination = &query.PageResponse{}
			}
			if err := m.Pagination.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipQuery(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthQuery
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupQuery
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthQuery
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthQuery        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowQuery          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupQuery = fmt.Errorf("proto: unexpected end of group")
)
