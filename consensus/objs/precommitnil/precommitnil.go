package precommitnil

import (
	mdefs "github.com/MadBase/MadNet/consensus/objs/capn"
	"github.com/MadBase/MadNet/errorz"
	gUtils "github.com/MadBase/MadNet/utils"
	capnp "zombiezen.com/go/capnproto2"
)

// Marshal will marshal the PreCommitNil object.
func Marshal(v mdefs.PreCommitNil) ([]byte, error) {
	raw, err := capnp.Canonicalize(v.Struct)
	if err != nil {
		return nil, err
	}
	out := gUtils.CopySlice(raw)
	return out, nil
}

// Unmarshal will unmarshal the PreCommitNil object.
func Unmarshal(data []byte) (mdefs.PreCommitNil, error) {
	var err error
	fn := func() (mdefs.PreCommitNil, error) {
		defer func() {
			if r := recover(); r != nil {
				err = errorz.ErrInvalid{}.New("bad serialization")
			}
		}()
		dataCopy := gUtils.CopySlice(data)
		msg := &capnp.Message{Arena: capnp.SingleSegment(dataCopy)}
		obj, tmp := mdefs.ReadRootPreCommitNil(msg)
		err = tmp
		return obj, err
	}
	obj, err := fn()
	if err != nil {
		return mdefs.PreCommitNil{}, err
	}
	return obj, nil
}

// Validate will validate the PreCommitNil object
func Validate(p mdefs.PreCommitNil) error {
	if !p.IsValid() {
		return errorz.ErrInvalid{}.New("pcn capn obj is not valid")
	}
	if !p.HasRCert() {
		return errorz.ErrInvalid{}.New("pcn capn obj does not have RCert")
	}
	if !p.HasSignature() {
		return errorz.ErrInvalid{}.New("pcn capn obj does not have Signature")
	}
	return nil
}
