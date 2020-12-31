package rstate

import (
	mdefs "github.com/MadBase/MadNet/consensus/objs/capn"
	"github.com/MadBase/MadNet/errorz"
	gUtils "github.com/MadBase/MadNet/utils"
	capnp "zombiezen.com/go/capnproto2"
)

// Marshal will marshal the RoundState object.
func Marshal(v mdefs.RoundState) ([]byte, error) {
	raw, err := capnp.Canonicalize(v.Struct)
	if err != nil {
		return nil, err
	}
	out := gUtils.CopySlice(raw)
	return out, nil
}

// Unmarshal will unmarshal the RoundState object.
func Unmarshal(data []byte) (mdefs.RoundState, error) {
	var err error
	fn := func() (mdefs.RoundState, error) {
		defer func() {
			if r := recover(); r != nil {
				err = errorz.ErrInvalid{}.New("bad serialization")
			}
		}()
		dataCopy := gUtils.CopySlice(data)
		msg := &capnp.Message{Arena: capnp.SingleSegment(dataCopy)}
		obj, tmp := mdefs.ReadRootRoundState(msg)
		err = tmp
		return obj, err
	}
	obj, err := fn()
	if err != nil {
		return mdefs.RoundState{}, err
	}
	return obj, nil
}

// Validate will validate the RoundState object
func Validate(p mdefs.RoundState) error {
	if !p.IsValid() {
		return errorz.ErrInvalid{}.New("roundstate capn obj is not valid")
	}
	if !p.HasVAddr() {
		return errorz.ErrInvalid{}.New("roundstate capn obj does not have VAddr")
	}
	if !p.HasGroupShare() {
		return errorz.ErrInvalid{}.New("roundstate capn obj does not have GroupShare")
	}
	if !p.HasGroupKey() {
		return errorz.ErrInvalid{}.New("roundstate capn obj does not have GroupKey")
	}
	if !p.HasRCert() {
		return errorz.ErrInvalid{}.New("roundstate capn obj does not have RCert")
	}
	return nil
}
