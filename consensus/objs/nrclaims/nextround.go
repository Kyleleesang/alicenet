package nrclaims

import (
	mdefs "github.com/MadBase/MadNet/consensus/objs/capn"
	"github.com/MadBase/MadNet/errorz"
	gUtils "github.com/MadBase/MadNet/utils"
	capnp "zombiezen.com/go/capnproto2"
)

// Marshal will marshal the NRClaims object.
func Marshal(v mdefs.NRClaims) ([]byte, error) {
	raw, err := capnp.Canonicalize(v.Struct)
	if err != nil {
		return nil, err
	}
	out := gUtils.CopySlice(raw)
	return out, nil
}

// Unmarshal will unmarshal the NRClaims.
func Unmarshal(data []byte) (mdefs.NRClaims, error) {
	var err error
	fn := func() (mdefs.NRClaims, error) {
		defer func() {
			if r := recover(); r != nil {
				err = errorz.ErrInvalid{}.New("bad serialization")
			}
		}()
		dataCopy := gUtils.CopySlice(data)
		msg := &capnp.Message{Arena: capnp.SingleSegment(dataCopy)}
		obj, tmp := mdefs.ReadRootNRClaims(msg)
		err = tmp
		return obj, err
	}
	obj, err := fn()
	if err != nil {
		return mdefs.NRClaims{}, err
	}
	return obj, nil
}

// Validate will validate the NRClaims object
func Validate(p mdefs.NRClaims) error {
	if !p.IsValid() {
		return errorz.ErrInvalid{}.New("nrclaims capn obj is not valid")
	}
	if !p.HasRCert() {
		return errorz.ErrInvalid{}.New("nrclaims capn obj does not have RCert")
	}
	if !p.HasRClaims() {
		return errorz.ErrInvalid{}.New("nrclaims capn obj does not have RClaims")
	}
	if !p.HasSigShare() {
		return errorz.ErrInvalid{}.New("nrclaims capn obj does not have SigShare")
	}
	return nil
}
