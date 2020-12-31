package rcert

import (
	mdefs "github.com/MadBase/MadNet/consensus/objs/capn"
	"github.com/MadBase/MadNet/errorz"
	gUtils "github.com/MadBase/MadNet/utils"
	capnp "zombiezen.com/go/capnproto2"
)

// Marshal will marshal the RCert object.
func Marshal(v mdefs.RCert) ([]byte, error) {
	raw, err := capnp.Canonicalize(v.Struct)
	if err != nil {
		return nil, err
	}
	out := gUtils.CopySlice(raw)
	return out, nil
}

// Unmarshal will unmarshal the RCert object.
func Unmarshal(data []byte) (mdefs.RCert, error) {
	var err error
	fn := func() (mdefs.RCert, error) {
		defer func() {
			if r := recover(); r != nil {
				err = errorz.ErrInvalid{}.New("bad serialization")
			}
		}()
		dataCopy := gUtils.CopySlice(data)
		msg := &capnp.Message{Arena: capnp.SingleSegment(dataCopy)}
		obj, tmp := mdefs.ReadRootRCert(msg)
		err = tmp
		return obj, err
	}
	obj, err := fn()
	if err != nil {
		return mdefs.RCert{}, err
	}
	return obj, nil
}

// Validate will validate the RCert object
func Validate(p mdefs.RCert) error {
	if !p.IsValid() {
		return errorz.ErrInvalid{}.New("rcert capn obj is not valid")
	}
	if !p.HasRClaims() {
		return errorz.ErrInvalid{}.New("rcert capn obj does not have RClaims")
	}
	if !p.HasSigGroup() {
		return errorz.ErrInvalid{}.New("rcert capn obj does not have SigGroup")
	}
	return nil
}
