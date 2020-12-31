package prevote

import (
	mdefs "github.com/MadBase/MadNet/consensus/objs/capn"
	"github.com/MadBase/MadNet/errorz"
	gUtils "github.com/MadBase/MadNet/utils"
	capnp "zombiezen.com/go/capnproto2"
)

// Marshal will marshal the PreVote object.
func Marshal(v mdefs.PreVote) ([]byte, error) {
	raw, err := capnp.Canonicalize(v.Struct)
	if err != nil {
		return nil, err
	}
	out := gUtils.CopySlice(raw)
	return out, nil
}

// Unmarshal will unmarshal the PreVote object.
func Unmarshal(data []byte) (mdefs.PreVote, error) {
	var err error
	fn := func() (mdefs.PreVote, error) {
		defer func() {
			if r := recover(); r != nil {
				err = errorz.ErrInvalid{}.New("bad serialization")
			}
		}()
		dataCopy := gUtils.CopySlice(data)
		msg := &capnp.Message{Arena: capnp.SingleSegment(dataCopy)}
		obj, tmp := mdefs.ReadRootPreVote(msg)
		err = tmp
		return obj, err
	}
	obj, err := fn()
	if err != nil {
		return mdefs.PreVote{}, err
	}
	return obj, nil
}

// Validate will validate the PreVote object
func Validate(p mdefs.PreVote) error {
	if !p.IsValid() {
		return errorz.ErrInvalid{}.New("prevote capn obj is not valid")
	}
	if !p.HasProposal() {
		return errorz.ErrInvalid{}.New("prevote capn obj does not have Proposal")
	}
	if !p.HasSignature() {
		return errorz.ErrInvalid{}.New("prevote capn obj does not have Signature")
	}
	return nil
}
