package nextround

import (
	mdefs "github.com/MadBase/MadNet/consensus/objs/capn"
	"github.com/MadBase/MadNet/errorz"
	gUtils "github.com/MadBase/MadNet/utils"
	capnp "zombiezen.com/go/capnproto2"
)

// Marshal will marshal the NextRound object.
func Marshal(v mdefs.NextRound) ([]byte, error) {
	raw, err := capnp.Canonicalize(v.Struct)
	if err != nil {
		return nil, err
	}
	out := gUtils.CopySlice(raw)
	return out, nil
}

// Unmarshal will unmarshal the NextRound object.
func Unmarshal(data []byte) (mdefs.NextRound, error) {
	var err error
	fn := func() (mdefs.NextRound, error) {
		defer func() {
			if r := recover(); r != nil {
				err = errorz.ErrInvalid{}.New("bad serialization")
			}
		}()
		dataCopy := gUtils.CopySlice(data)
		msg := &capnp.Message{Arena: capnp.SingleSegment(dataCopy)}
		obj, tmp := mdefs.ReadRootNextRound(msg)
		err = tmp
		return obj, err
	}
	obj, err := fn()
	if err != nil {
		return mdefs.NextRound{}, err
	}
	return obj, nil
}

// Validate will validate the NextRound object
func Validate(p mdefs.NextRound) error {
	if !p.IsValid() {
		return errorz.ErrInvalid{}.New("nextround capn obj is not valid")
	}
	if !p.HasNRClaims() {
		return errorz.ErrInvalid{}.New("nextround capn obj does not have NRClaims")
	}
	if !p.HasSignature() {
		return errorz.ErrInvalid{}.New("nextround capn obj does not have Signature")
	}
	return nil
}
